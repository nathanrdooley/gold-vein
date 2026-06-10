const { handleApiError, sendJson, supabaseFetch } = require("./_lib/supabase");

module.exports = async (request, response) => {
  if (request.method !== "GET") {
    sendJson(response, { error: "Method not allowed." }, 405);
    return;
  }

  const hasSupabaseUrl = Boolean(process.env.SUPABASE_URL);
  const hasServiceRoleKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  if (!hasSupabaseUrl || !hasServiceRoleKey) {
    sendJson(
      response,
      {
        ok: false,
        checks: {
          supabaseUrl: hasSupabaseUrl ? "configured" : "missing",
          serviceRoleKey: hasServiceRoleKey ? "configured" : "missing",
          database: "not checked"
        }
      },
      500
    );
    return;
  }

  try {
    const rows = await supabaseFetch("adventure_categories?select=id&limit=1", {
      headers: {
        Prefer: ""
      }
    });

    sendJson(response, {
      ok: true,
      checks: {
        supabaseUrl: "configured",
        serviceRoleKey: "configured",
        database: "reachable"
      },
      sampleRows: rows.length
    });
  } catch (error) {
    handleApiError(response, error);
  }
};

