# Gold Vein + WordPress Stats

Gold Vein can send lightweight trail events into a WordPress dashboard on Time For Providence.

## Install the WordPress Plugin

1. Zip the folder `wordpress/gold-vein-stats`.
2. In WordPress, open Plugins > Add New > Upload Plugin.
3. Upload the zip, activate it, then open Dashboard > Gold Vein Stats.
4. Copy the Endpoint and Ingest Key.

The plugin creates a `wp_gold_vein_events` table, a REST endpoint at:

```text
https://timeforprovidence.com/wp-json/gold-vein/v1/event
```

It also adds a dashboard widget and a full Dashboard > Gold Vein Stats page with recent activity and top event counts.

## Connect Gold Vein

For the prototype, you can configure the local or deployed Gold Vein site from the browser console:

```js
localStorage.setItem("gold-vein-stats-endpoint", "https://timeforprovidence.com/wp-json/gold-vein/v1/event");
localStorage.setItem("gold-vein-stats-key", "PASTE_THE_WORDPRESS_INGEST_KEY");
```

For the deployed site, add this before `script.js` in `index.html`:

```html
<script>
  window.GOLD_VEIN_STATS_ENDPOINT = "https://timeforprovidence.com/wp-json/gold-vein/v1/event";
  window.GOLD_VEIN_STATS_KEY = "PASTE_THE_WORDPRESS_INGEST_KEY";
</script>
```

## Events Currently Sent

- `adventure_selected`
- `node_opened`
- `journal_entry_saved`
- `support_option_selected`
- `support_amount_selected`
- `support_note_saved`
- `challenge_activation_completed`
- `challenge_reward_received`
- `reward_received`
- `treasure_type_selected`
- `treasure_saved`
- `checkpoint_evidence_saved`

## Security Note

The ingest key is prototype-level protection because browser keys can be seen by advanced visitors. Before this becomes a larger public analytics system, use server-side signing, rate limiting, and tighter origin rules.
