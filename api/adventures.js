const { handleApiError, sendError, sendJson, supabaseFetch } = require("./_lib/supabase");

module.exports = async (request, response) => {
  if (request.method !== "GET") {
    sendError(response, "Method not allowed.", 405);
    return;
  }

  try {
    const categories = await supabaseFetch(
      "adventure_categories?select=id,slug,title,summary,sort_order,trails(id,slug,title,subtitle,scripture_map,summary,place_type,difficulty,estimated_minutes,treasure_type,is_published,sort_order,trail_steps!trail_steps_trail_id_fkey(id,step_order,step_label,instruction,attention,unlock_label,unlock_type,unlock_config,next_trail_id))&order=sort_order.asc&trails.order=sort_order.asc&trails.trail_steps.order=step_order.asc"
    );

    sendJson(response, { categories });
  } catch (error) {
    handleApiError(response, error);
  }
};
