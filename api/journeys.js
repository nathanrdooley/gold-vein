const {
  createInviteCode,
  handleApiError,
  readBody,
  sendError,
  sendJson,
  supabaseFetch
} = require("./_lib/supabase");

const getJourneyByInvite = async (inviteCode) => {
  const groups = await supabaseFetch(
    `journey_groups?invite_code=eq.${encodeURIComponent(inviteCode)}&select=id,invite_code,title,status,created_at,trails(id,slug,title,scripture_map),journey_members(id,display_name,role,last_seen_at),traveler_progress(id,traveler_name,current_step,status,location_label,updated_at)`
  );

  return groups[0] || null;
};

module.exports = async (request, response) => {
  try {
    if (request.method === "GET") {
      const url = new URL(request.url, `http://${request.headers.host}`);
      const inviteCode = url.searchParams.get("invite_code");

      if (!inviteCode) {
        sendError(response, "invite_code is required.", 400);
        return;
      }

      const journey = await getJourneyByInvite(inviteCode);
      if (!journey) {
        sendError(response, "Journey not found.", 404);
        return;
      }

      sendJson(response, { journey });
      return;
    }

    if (request.method === "POST") {
      const body = await readBody(request);
      const trailId = body.trail_id;
      const title = body.title?.trim() || "Gold Vein Shared Journey";
      const displayName = body.display_name?.trim() || "Traveler";
      const inviteCode = createInviteCode();

      if (!trailId) {
        sendError(response, "trail_id is required.", 400);
        return;
      }

      const groups = await supabaseFetch("journey_groups", {
        method: "POST",
        body: JSON.stringify({
          trail_id: trailId,
          invite_code: inviteCode,
          title
        })
      });

      const journey = groups[0];
      const members = await supabaseFetch("journey_members", {
        method: "POST",
        body: JSON.stringify({
          journey_group_id: journey.id,
          display_name: displayName,
          role: "leader",
          last_seen_at: new Date().toISOString()
        })
      });

      const member = members[0];
      await supabaseFetch("traveler_progress", {
        method: "POST",
        body: JSON.stringify({
          journey_group_id: journey.id,
          trail_id: trailId,
          journey_member_id: member.id,
          traveler_name: displayName,
          current_step: 0,
          status: "in_progress"
        })
      });

      sendJson(response, { journey, member }, 201);
      return;
    }

    sendError(response, "Method not allowed.", 405);
  } catch (error) {
    handleApiError(response, error);
  }
};

