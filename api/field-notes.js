const { handleApiError, readBody, sendError, sendJson, supabaseFetch } = require("./_lib/supabase");

module.exports = async (request, response) => {
  try {
    if (request.method === "POST") {
      const body = await readBody(request);

      if (!body.trail_title?.trim()) {
        sendError(response, "trail_title is required.", 400);
        return;
      }

      const notes = await supabaseFetch("field_notes", {
        method: "POST",
        body: JSON.stringify({
          profile_id: body.profile_id || null,
          journey_group_id: body.journey_group_id || null,
          trail_id: body.trail_id || null,
          trail_title: body.trail_title.trim(),
          place: body.place || null,
          weather: body.weather || null,
          scripture: body.scripture || null,
          treasure: body.treasure || null,
          next_step: body.next_step || null,
          note_date: body.note_date || null,
          note_time: body.note_time || null
        })
      });

      sendJson(response, { field_note: notes[0] }, 201);
      return;
    }

    sendError(response, "Method not allowed.", 405);
  } catch (error) {
    handleApiError(response, error);
  }
};

