const { handleApiError, readBody, sendError, sendJson, supabaseFetch } = require("./_lib/supabase");

module.exports = async (request, response) => {
  try {
    if (request.method === "GET") {
      const url = new URL(request.url, `http://${request.headers.host}`);
      const code = url.searchParams.get("code");

      if (!code) {
        sendError(response, "code is required.", 400);
        return;
      }

      const passes = await supabaseFetch(
        `treasure_redemptions?code=eq.${encodeURIComponent(code)}&select=id,code,treasure_label,status,redeemed_by_name,redeemed_at,trails(id,slug,title)`
      );

      if (!passes.length) {
        sendError(response, "Redemption code not found.", 404);
        return;
      }

      sendJson(response, { redemption: passes[0] });
      return;
    }

    if (request.method === "POST") {
      const body = await readBody(request);

      if (!body.code) {
        sendError(response, "code is required.", 400);
        return;
      }

      const existing = await supabaseFetch(
        `treasure_redemptions?code=eq.${encodeURIComponent(body.code)}&select=id,status`
      );

      if (!existing.length) {
        sendError(response, "Redemption code not found.", 404);
        return;
      }

      if (existing[0].status === "redeemed") {
        sendError(response, "This treasure has already been redeemed.", 409);
        return;
      }

      const rows = await supabaseFetch(`treasure_redemptions?id=eq.${existing[0].id}`, {
        method: "PATCH",
        body: JSON.stringify({
          status: "redeemed",
          redeemed_by_name: body.redeemed_by_name?.trim() || "Traveler",
          redeemed_at: new Date().toISOString()
        })
      });

      sendJson(response, { redemption: rows[0] });
      return;
    }

    sendError(response, "Method not allowed.", 405);
  } catch (error) {
    handleApiError(response, error);
  }
};

