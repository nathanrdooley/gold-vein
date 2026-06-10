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

      const messages = await supabaseFetch(
        `journey_messages?journey_group_id=eq.${encodeURIComponent(journeyGroupId)}&select=id,display_name,message,created_at&order=created_at.asc&limit=100`
      );

      sendJson(response, { messages });
      return;
    }

    if (request.method === "POST") {
      const body = await readBody(request);

      if (!body.journey_group_id || !body.message?.trim()) {
        sendError(response, "journey_group_id and message are required.", 400);
        return;
      }

      const messages = await supabaseFetch("journey_messages", {
        method: "POST",
        body: JSON.stringify({
          journey_group_id: body.journey_group_id,
          journey_member_id: body.journey_member_id || null,
          display_name: body.display_name?.trim() || "Traveler",
          message: body.message.trim()
        })
      });

      sendJson(response, { message: messages[0] }, 201);
      return;
    }

    sendError(response, "Method not allowed.", 405);
  } catch (error) {
    handleApiError(response, error);
  }
};

