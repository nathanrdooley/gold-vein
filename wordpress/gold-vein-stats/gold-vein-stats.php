<?php
/**
 * Plugin Name: Gold Vein Stats
 * Description: Receives Gold Vein trail events and displays them inside the WordPress dashboard.
 * Version: 0.1.0
 * Author: Gold Vein
 * Text Domain: gold-vein-stats
 */

if (!defined('ABSPATH')) {
    exit;
}

const GOLD_VEIN_STATS_VERSION = '0.1.0';
const GOLD_VEIN_STATS_KEY_OPTION = 'gold_vein_stats_ingest_key';
const GOLD_VEIN_STATS_ORIGIN_OPTION = 'gold_vein_stats_allowed_origin';

function gold_vein_stats_table_name() {
    global $wpdb;
    return $wpdb->prefix . 'gold_vein_events';
}

function gold_vein_stats_activate() {
    global $wpdb;

    $table_name = gold_vein_stats_table_name();
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE {$table_name} (
        id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        site VARCHAR(80) NOT NULL DEFAULT 'gold-vein',
        event_name VARCHAR(120) NOT NULL,
        trail VARCHAR(180) NULL,
        node VARCHAR(80) NULL,
        metadata LONGTEXT NULL,
        ip_hash VARCHAR(64) NULL,
        created_at DATETIME NOT NULL,
        PRIMARY KEY  (id),
        KEY site (site),
        KEY event_name (event_name),
        KEY trail (trail),
        KEY node (node),
        KEY created_at (created_at)
    ) {$charset_collate};";

    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta($sql);

    if (!get_option(GOLD_VEIN_STATS_KEY_OPTION)) {
        update_option(GOLD_VEIN_STATS_KEY_OPTION, wp_generate_password(32, false, false));
    }

    if (!get_option(GOLD_VEIN_STATS_ORIGIN_OPTION)) {
        update_option(GOLD_VEIN_STATS_ORIGIN_OPTION, '*');
    }
}
register_activation_hook(__FILE__, 'gold_vein_stats_activate');

function gold_vein_stats_register_settings() {
    register_setting('gold_vein_stats_settings', GOLD_VEIN_STATS_KEY_OPTION, [
        'type' => 'string',
        'sanitize_callback' => 'sanitize_text_field',
        'default' => '',
    ]);
    register_setting('gold_vein_stats_settings', GOLD_VEIN_STATS_ORIGIN_OPTION, [
        'type' => 'string',
        'sanitize_callback' => 'esc_url_raw',
        'default' => '*',
    ]);
}
add_action('admin_init', 'gold_vein_stats_register_settings');

function gold_vein_stats_add_admin_pages() {
    add_dashboard_page(
        'Gold Vein Stats',
        'Gold Vein Stats',
        'manage_options',
        'gold-vein-stats',
        'gold_vein_stats_render_admin_page'
    );
}
add_action('admin_menu', 'gold_vein_stats_add_admin_pages');

function gold_vein_stats_endpoint_url() {
    return esc_url_raw(rest_url('gold-vein/v1/event'));
}

function gold_vein_stats_get_summary() {
    global $wpdb;

    $table_name = gold_vein_stats_table_name();
    $since = gmdate('Y-m-d H:i:s', time() - (7 * DAY_IN_SECONDS));

    return [
        'last_seven_days' => (int) $wpdb->get_var(
            $wpdb->prepare("SELECT COUNT(*) FROM {$table_name} WHERE created_at >= %s", $since)
        ),
        'total' => (int) $wpdb->get_var("SELECT COUNT(*) FROM {$table_name}"),
        'top_events' => $wpdb->get_results(
            "SELECT event_name, COUNT(*) AS total FROM {$table_name} GROUP BY event_name ORDER BY total DESC LIMIT 6"
        ),
        'recent' => $wpdb->get_results(
            "SELECT site, event_name, trail, node, metadata, created_at FROM {$table_name} ORDER BY created_at DESC LIMIT 12"
        ),
    ];
}

function gold_vein_stats_render_admin_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    $summary = gold_vein_stats_get_summary();
    $endpoint = gold_vein_stats_endpoint_url();
    $key = get_option(GOLD_VEIN_STATS_KEY_OPTION, '');
    $origin = get_option(GOLD_VEIN_STATS_ORIGIN_OPTION, '*');
    ?>
    <div class="wrap">
        <h1>Gold Vein Stats</h1>
        <p>Use this receiver to collect trail activity from Gold Vein and review it in the Time For Providence dashboard.</p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin:20px 0;">
            <div class="card">
                <h2><?php echo esc_html($summary['last_seven_days']); ?></h2>
                <p>Events in the last 7 days</p>
            </div>
            <div class="card">
                <h2><?php echo esc_html($summary['total']); ?></h2>
                <p>Total events received</p>
            </div>
        </div>

        <h2>Connection Settings</h2>
        <form method="post" action="options.php">
            <?php settings_fields('gold_vein_stats_settings'); ?>
            <table class="form-table" role="presentation">
                <tr>
                    <th scope="row"><label for="gold-vein-endpoint">Endpoint</label></th>
                    <td>
                        <input id="gold-vein-endpoint" type="text" readonly class="regular-text code" value="<?php echo esc_attr($endpoint); ?>">
                        <p class="description">Paste this URL into Gold Vein as the stats endpoint.</p>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="gold-vein-key">Ingest Key</label></th>
                    <td>
                        <input id="gold-vein-key" name="<?php echo esc_attr(GOLD_VEIN_STATS_KEY_OPTION); ?>" type="text" class="regular-text code" value="<?php echo esc_attr($key); ?>">
                        <p class="description">Prototype protection only. A browser key is visible to determined visitors.</p>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="gold-vein-origin">Allowed Origin</label></th>
                    <td>
                        <input id="gold-vein-origin" name="<?php echo esc_attr(GOLD_VEIN_STATS_ORIGIN_OPTION); ?>" type="text" class="regular-text code" value="<?php echo esc_attr($origin); ?>">
                        <p class="description">Use * for testing, or your Vercel URL such as https://gold-vein.vercel.app.</p>
                    </td>
                </tr>
            </table>
            <?php submit_button('Save Gold Vein Stats Settings'); ?>
        </form>

        <h2>Top Events</h2>
        <table class="widefat striped">
            <thead><tr><th>Event</th><th>Total</th></tr></thead>
            <tbody>
            <?php if (empty($summary['top_events'])) : ?>
                <tr><td colspan="2">No Gold Vein events have been received yet.</td></tr>
            <?php else : ?>
                <?php foreach ($summary['top_events'] as $row) : ?>
                    <tr>
                        <td><?php echo esc_html($row->event_name); ?></td>
                        <td><?php echo esc_html($row->total); ?></td>
                    </tr>
                <?php endforeach; ?>
            <?php endif; ?>
            </tbody>
        </table>

        <h2>Recent Trail Activity</h2>
        <?php gold_vein_stats_render_recent_table($summary['recent']); ?>
    </div>
    <?php
}

function gold_vein_stats_render_recent_table($events) {
    ?>
    <table class="widefat striped">
        <thead>
            <tr>
                <th>When</th>
                <th>Site</th>
                <th>Event</th>
                <th>Trail</th>
                <th>Node</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
        <?php if (empty($events)) : ?>
            <tr><td colspan="6">No recent activity yet.</td></tr>
        <?php else : ?>
            <?php foreach ($events as $event) : ?>
                <?php
                $metadata = json_decode((string) $event->metadata, true);
                $details = '';
                if (is_array($metadata)) {
                    $detail_pairs = [];
                    foreach ($metadata as $key => $value) {
                        $detail_pairs[] = sanitize_key($key) . ': ' . sanitize_text_field(
                            is_scalar($value) ? (string) $value : wp_json_encode($value)
                        );
                    }
                    $details = implode(', ', $detail_pairs);
                }
                ?>
                <tr>
                    <td><?php echo esc_html(mysql2date('M j, Y g:i a', $event->created_at)); ?></td>
                    <td><?php echo esc_html($event->site); ?></td>
                    <td><strong><?php echo esc_html($event->event_name); ?></strong></td>
                    <td><?php echo esc_html($event->trail); ?></td>
                    <td><?php echo esc_html($event->node); ?></td>
                    <td><?php echo esc_html(wp_trim_words($details, 18)); ?></td>
                </tr>
            <?php endforeach; ?>
        <?php endif; ?>
        </tbody>
    </table>
    <?php
}

function gold_vein_stats_add_dashboard_widget() {
    wp_add_dashboard_widget(
        'gold_vein_stats_dashboard_widget',
        'Gold Vein Trail Activity',
        'gold_vein_stats_render_dashboard_widget'
    );
}
add_action('wp_dashboard_setup', 'gold_vein_stats_add_dashboard_widget');

function gold_vein_stats_render_dashboard_widget() {
    $summary = gold_vein_stats_get_summary();
    echo '<p><strong>' . esc_html($summary['last_seven_days']) . '</strong> events received in the last 7 days.</p>';
    echo '<p><a href="' . esc_url(admin_url('index.php?page=gold-vein-stats')) . '">Open Gold Vein Stats</a></p>';
}

function gold_vein_stats_register_rest_routes() {
    register_rest_route('gold-vein/v1', '/event', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'gold_vein_stats_receive_event',
        'permission_callback' => '__return_true',
    ]);
}
add_action('rest_api_init', 'gold_vein_stats_register_rest_routes');

function gold_vein_stats_apply_cors_headers($served, $result, $request) {
    if (strpos($request->get_route(), '/gold-vein/v1/') !== 0) {
        return $served;
    }

    $origin = get_option(GOLD_VEIN_STATS_ORIGIN_OPTION, '*') ?: '*';
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-Gold-Vein-Key');

    return $served;
}
add_filter('rest_pre_serve_request', 'gold_vein_stats_apply_cors_headers', 10, 3);

function gold_vein_stats_receive_event(WP_REST_Request $request) {
    $expected_key = get_option(GOLD_VEIN_STATS_KEY_OPTION, '');
    $provided_key = $request->get_header('x_gold_vein_key') ?: $request->get_param('key');

    if ($expected_key && !hash_equals($expected_key, (string) $provided_key)) {
        return new WP_Error('gold_vein_stats_forbidden', 'Gold Vein stats key is missing or invalid.', ['status' => 401]);
    }

    $event_name = sanitize_key((string) $request->get_param('event_name'));

    if (!$event_name) {
        return new WP_Error('gold_vein_stats_missing_event', 'An event_name is required.', ['status' => 400]);
    }

    $metadata = $request->get_param('metadata');
    if (!is_array($metadata)) {
        $metadata = [];
    }

    global $wpdb;
    $table_name = gold_vein_stats_table_name();
    $remote_addr = isset($_SERVER['REMOTE_ADDR']) ? sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'])) : '';

    $inserted = $wpdb->insert(
        $table_name,
        [
            'site' => sanitize_text_field((string) ($request->get_param('site') ?: 'gold-vein')),
            'event_name' => $event_name,
            'trail' => sanitize_text_field((string) $request->get_param('trail')),
            'node' => sanitize_text_field((string) $request->get_param('node')),
            'metadata' => wp_json_encode($metadata),
            'ip_hash' => $remote_addr ? hash('sha256', $remote_addr . wp_salt('nonce')) : null,
            'created_at' => current_time('mysql', true),
        ],
        ['%s', '%s', '%s', '%s', '%s', '%s', '%s']
    );

    if (!$inserted) {
        return new WP_Error('gold_vein_stats_insert_failed', 'The event could not be saved.', ['status' => 500]);
    }

    return rest_ensure_response([
        'ok' => true,
        'id' => (int) $wpdb->insert_id,
    ]);
}
