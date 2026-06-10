const { handleApiError, readBody, sendError, sendJson, supabaseFetch } = require("./_lib/supabase");

module.exports = async (request, response) => {
  try {
    if (request.method !== "POST") {
      sendError(response, "Method not allowed.", 405);
      return;
    }

    const body = await readBody(request);
    const amount = Number(body.amount || 0);

    if (!amount || amount < 1) {
      sendError(response, "amount is required.", 400);
      return;
    }

    const notes = await supabaseFetch("support_notes", {
      method: "POST",
      body: JSON.stringify({
        support_type: body.support_type?.trim() || "Give Freely",
        amount_cents: Math.round(amount * 100),
        purpose: body.purpose || null,
        contact_note: body.contact_note || null,
        payment_provider: body.payment_provider || "venmo",
        payment_status: body.payment_status || "manual"
      })
    });

    sendJson(response, { support_note: notes[0] }, 201);
  } catch (error) {
    handleApiError(response, error);
  }
};

