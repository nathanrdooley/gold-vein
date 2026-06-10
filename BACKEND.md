# Gold Vein Backend

This backend is designed for a Vercel + Supabase build.

The frontend can stay simple. Vercel hosts the `/api/*` routes, and those routes talk to Supabase
with a server-only key.

## What This Backend Supports

- adventure categories
- trails under each adventure category
- trail steps and linked next trails
- shared journey groups with invite codes
- traveler membership and progress
- group messages for trail companionship
- field notes saved to the database
- support notes for Venmo/manual support tracking
- prepared treasure redemption codes

## Setup

1. Create a Supabase project.
2. Open the Supabase SQL editor.
3. Paste and run [`db/schema.sql`](db/schema.sql).
4. In Vercel, open the Gold Vein project settings.
5. Add these environment variables:

```txt
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

6. Redeploy the Vercel project.

Keep `SUPABASE_SERVICE_ROLE_KEY` private. It belongs only in Vercel environment variables, never in
`index.html`, `script.js`, or any browser-facing file.

## API Routes

### `GET /api/health`

Checks whether the Vercel function can see the Supabase environment variables and reach the
database. This route never returns the secret key.

### `GET /api/adventures`

Returns adventure categories with their trails.

### `POST /api/journeys`

Creates a shared journey group and first traveler.

```json
{
  "trail_id": "trail uuid",
  "title": "Gospel Adventure",
  "display_name": "Nathan"
}
```

### `GET /api/journeys?invite_code=GV-ABCD-12345`

Returns one shared journey with its trail, members, and progress.

### `POST /api/members`

Adds an invited traveler to a shared journey and creates their first progress row.

```json
{
  "invite_code": "GV-ABCD-12345",
  "display_name": "Glen"
}
```

### `GET /api/progress?journey_group_id=...`

Returns traveler progress for a shared journey.

### `POST /api/progress`

Creates or updates a traveler's trail progress.

```json
{
  "journey_group_id": "journey uuid",
  "trail_id": "trail uuid",
  "journey_member_id": "member uuid",
  "traveler_name": "Nathan",
  "current_step": 3,
  "status": "in_progress",
  "location_label": "Watermark Coffee Shop"
}
```

### `GET /api/messages?journey_group_id=...`

Returns group chat messages for a shared journey.

### `POST /api/messages`

Saves a group chat message.

```json
{
  "journey_group_id": "journey uuid",
  "journey_member_id": "member uuid",
  "display_name": "Nathan",
  "message": "I just reached Step 3."
}
```

### `POST /api/field-notes`

Saves a field note.

### `POST /api/support-notes`

Saves a manual support note for Venmo or other future payment providers.

### `GET /api/redemptions?code=GV-COFFEE-001`

Looks up a prepared treasure redemption code.

### `POST /api/redemptions`

Marks a prepared treasure as redeemed.

```json
{
  "code": "GV-COFFEE-001",
  "redeemed_by_name": "Traveler"
}
```

## Next Build

The next frontend step is to connect the Discover page to `GET /api/adventures`, then connect the
Shared Journey panel to `/api/journeys`, `/api/progress`, and `/api/messages`.

The next security step is adding real user accounts before storing private contacts, live location,
or sensitive field notes.
