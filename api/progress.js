const { handleApiError, readBody, sendError, sendJson, supabaseFetch } = require("./_lib/supabase");

module.exports = async (request, response) => {
  try {
    if (request.method === "GET") {
      const url = new URL(request.url, `http://${request.headers.host}`);
      const journeyGroupId = url.searchParams.get("journey_group_id");

      if (!journeyGroupId) {
        sendError(response, "journey_group_id is required.", 400);
        return;
      }

      const progress = await supabaseFetch(
        `traveler_progress?journey_group_id=eq.${encodeURIComponent(journeyGroupId)}&select=id,traveler_name,current_step,status,location_label,updated_at&order=updated_at.desc`
      );

      sendJson(response, { progress });
      return;
    }

    if (request.method === "POST") {
      const body = await readBody(request);
      const journeyGroupId = body.journey_group_id;
      const trailId = body.trail_id;
      const journeyMemberId = body.journey_member_id || null;
      const travelerName = body.traveler_name?.trim() || "Traveler";

      if (!journeyGroupId || !trailId) {
        sendError(response, "journey_group_id and trail_id are required.", 400);
        return;
      }

      const progressPayload = {
        journey_group_id: journeyGroupId,
        trail_id: trailId,
        journey_member_id: journeyMemberId,
        traveler_name: travelerName,
        current_step: Number(body.current_step || 0),
        status: body.status || "in_progress",
        location_label: body.location_label || null,
        latitude: body.latitude || null,
        longitude: body.longitude || null,
        updated_at: new Date().toISOString()
      };

      let rows = [];

      if (journeyMemberId) {
        const existing = await supabaseFetch(
          `traveler_progress?journey_group_id=eq.${encodeURIComponent(journeyGroupId)}&trail_id=eq.${encodeURIComponent(trailId)}&journey_member_id=eq.${encodeURIComponent(journeyMemberId)}&select=id`
        );

        if (existing.length) {
          rows = await supabaseFetch(`traveler_progress?id=eq.${existing[0].id}`, {
            method: "PATCH",
            body: JSON.stringify(progressPayload)
          });
        }
      }

      if (!rows.length) {
        rows = await supabaseFetch("traveler_progress", {
          method: "POST",
          body: JSON.stringify(progressPayload)
        });
      }

      sendJson(response, { progress: rows[0] }, 201);
      return;
    }

    sendError(response, "Method not allowed.", 405);
  } catch (error) {
    handleApiError(response, error);
  }
};
