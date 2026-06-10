const json = (response, status = 200) => {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(response.payload));
};

const sendJson = (response, payload, status = 200) => {
  response.payload = payload;
  json(response, status);
};

const sendError = (response, message, status = 400, details = null) => {
  sendJson(response, { error: message, details }, status);
};

const getSupabaseConfig = () => {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return {
    url: url.replace(/\/$/, ""),
    serviceRoleKey
  };
};

const supabaseFetch = async (path, options = {}) => {
  const config = getSupabaseConfig();

  if (!config) {
    const error = new Error("Supabase is not configured.");
    error.status = 500;
    throw error;
  }

  const headers = {
    apikey: config.serviceRoleKey,
    Authorization: `Bearer ${config.serviceRoleKey}`,
    "Content-Type": "application/json",
    Prefer: "return=representation",
    ...(options.headers || {})
  };

  const response = await fetch(`${config.url}/rest/v1/${path}`, {
    ...options,
    headers
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const error = new Error(data?.message || "Supabase request failed.");
    error.status = response.status;
    error.details = data;
    throw error;
  }

  return data;
};

const readBody = async (request) =>
  new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });

    request.on("error", reject);
  });

const createInviteCode = () =>
  `GV-${Math.random().toString(36).slice(2, 6)}-${Date.now().toString(36).slice(-5)}`.toUpperCase();

const handleApiError = (response, error) => {
  const status = error.status || 500;
  const message = status === 500 ? "Backend request failed." : error.message;
  sendError(response, message, status, error.details || null);
};

module.exports = {
  createInviteCode,
  handleApiError,
  readBody,
  sendError,
  sendJson,
  supabaseFetch
};

