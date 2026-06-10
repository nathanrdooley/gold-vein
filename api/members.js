const { handleApiError, readBody, sendError, sendJson, supabaseFetch } = require("./_lib/supabase");

module.exports = async (request, response) => {
  try {
    if (request.method !== "POST") {
      sendError(response, "Method not allowed.", 405);
      return;
    }

    const body = await readBody(request);
    const inviteCode = body.invite_code?.trim();
    const displayName = body.display_name?.trim() || "Traveler";

    if (!inviteCode) {
      sendError(response, "invite_code is required.", 400);
      return;
    }

    const groups = await supabaseFetch(
      `journey_groups?invite_code=eq.${encodeURIComponent(inviteCode)}&select=id,trail_id,title,status`
    );

    if (!groups.length) {
      sendError(response, "Journey not found.", 404);
      return;
    }

    const journey = groups[0];

    if (journey.status !== "active") {
      sendError(response, "This journey is not active.", 409);
      return;
    }

    const members = await supabaseFetch("journey_members", {
      method: "POST",
      body: JSON.stringify({
        journey_group_id: journey.id,
        display_name: displayName,
        role: "traveler",
        last_seen_at: new Date().toISOString()
      })
    });

    const member = members[0];
    const progressRows = await supabaseFetch("traveler_progress", {
      method: "POST",
      body: JSON.stringify({
        journey_group_id: journey.id,
        trail_id: journey.trail_id,
        journey_member_id: member.id,
        traveler_name: displayName,
        current_step: 0,
        status: "in_progress"
      })
    });

    sendJson(response, { journey, member, progress: progressRows[0] }, 201);
  } catch (error) {
    handleApiError(response, error);
  }
};

