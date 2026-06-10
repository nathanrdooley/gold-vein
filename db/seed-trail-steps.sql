-- Gold Vein trail step seed data
-- Run this after db/schema.sql in the Supabase SQL editor.

with step_seed as (
  select *
  from (
    values
      ('conversion-trail', 1, 'Look', 'Look honestly to Jesus Christ.', 'Ask: am I willing to look to Christ as He truly is, not merely as I imagined Him?', 'I am willing to look to Christ', 'manual', '{}'::jsonb, null),
      ('conversion-trail', 2, 'Hear', 'Receive the gospel invitation.', 'What does Jesus say must happen for someone to see and enter the Kingdom of God?', 'I received the gospel invitation', 'manual', '{}'::jsonb, null),
      ('conversion-trail', 3, 'Word', 'Read John 3:1-18.', 'What does Jesus reveal about new birth, belief, light, judgment, and love?', 'I experienced the passage', 'manual', '{}'::jsonb, null),
      ('conversion-trail', 4, 'Respond', 'Name your honest response before God.', 'Do you need faith, repentance, prayer, questions, confession, or follow-up?', 'I named my response', 'manual', '{}'::jsonb, null),
      ('conversion-trail', 5, 'Follow', 'Connect with a believer for prayer and next steps.', 'Who can help you continue toward Jesus Christ after this trail?', 'I connected for follow-up', 'manual', '{}'::jsonb, 'emmaus-road'),

      ('the-word-trail', 1, 'Receive', 'Open 2 Timothy 3:14-17.', 'Before studying, ask the Lord to give light through His Word.', 'I opened the Word', 'manual', '{}'::jsonb, null),
      ('the-word-trail', 2, 'Observe', 'Write down what the passage says Scripture is able to do.', 'What words describe the work and purpose of Scripture?', 'I observed the passage', 'manual', '{}'::jsonb, null),
      ('the-word-trail', 3, 'Listen', 'Notice where the passage corrects, trains, or encourages you.', 'Where does the Word meet your actual life today?', 'I listened to the Word', 'manual', '{}'::jsonb, null),
      ('the-word-trail', 4, 'Connect', 'Ask another believer what they notice in the passage.', 'What did they see that you did not see alone?', 'I connected through Scripture', 'manual', '{}'::jsonb, null),
      ('the-word-trail', 5, 'Practice', 'Take one faithful step in response to the Word.', 'How will this Scripture equip you for the good work in front of you?', 'I practiced the Word', 'manual', '{}'::jsonb, 'conversion-trail'),

      ('emmaus-road', 1, 'Road', 'Choose a walkable or hikeable path.', 'As you begin, name where hope feels hidden, slow, or confused.', 'I began the road', 'manual', '{}'::jsonb, null),
      ('emmaus-road', 2, 'Receive', 'Receive this walk as a place to meet with Christ.', 'Ask Him to open the Scriptures and your heart as you walk.', 'I received the trail', 'manual', '{}'::jsonb, null),
      ('emmaus-road', 3, 'Look', 'Read Luke 24:13-35.', 'Where do you see grief, misunderstanding, Scripture, burning hearts, and witness?', 'I experienced the passage', 'manual', '{}'::jsonb, null),
      ('emmaus-road', 4, 'Connect', 'Walk or talk with someone about what you noticed.', 'What changed when the passage was shared with another person?', 'I connected on the road', 'manual', '{}'::jsonb, null),
      ('emmaus-road', 5, 'Witness', 'Return with a witness to the risen Christ.', 'Who needs to hear that Jesus is alive and near?', 'I carried the witness', 'manual', '{}'::jsonb, 'nearby-neighbor'),

      ('nearby-neighbor', 1, 'Place', 'Go to a nearby public place.', 'Ask: Lord, who is near, and what mercy is in front of me?', 'I entered a nearby place', 'manual', '{}'::jsonb, null),
      ('nearby-neighbor', 2, 'Receive', 'Receive this trail as a prepared assignment of mercy.', 'You are not trying to perform; you are becoming available.', 'I received the trail', 'manual', '{}'::jsonb, null),
      ('nearby-neighbor', 3, 'Look', 'Read Luke 10:25-37.', 'Who notices? Who passes by? Who draws near? What does mercy cost?', 'I experienced the passage', 'manual', '{}'::jsonb, null),
      ('nearby-neighbor', 4, 'Connect', 'Speak with someone or pray for someone nearby.', 'What did presence reveal that private reflection could not?', 'I connected nearby', 'manual', '{}'::jsonb, null),
      ('nearby-neighbor', 5, 'Give', 'Give mercy through prayer, encouragement, service, or a tangible gift.', 'What did love require in this real place?', 'I gave mercy', 'manual', '{}'::jsonb, 'home-peace-trail'),

      ('home-peace-trail', 1, 'Place', 'Prepare a room, table, chair, or quiet corner.', 'Invite Christ into the ordinary place where you actually live.', 'I prepared the place', 'manual', '{}'::jsonb, null),
      ('home-peace-trail', 2, 'Receive', 'Receive peace before trying to fix the room or the people in it.', 'What changes when you receive before you serve?', 'I received peace', 'manual', '{}'::jsonb, null),
      ('home-peace-trail', 3, 'Look', 'Read Luke 10:38-42.', 'Notice distraction, presence, service, listening, and the good portion.', 'I experienced the passage', 'manual', '{}'::jsonb, null),
      ('home-peace-trail', 4, 'Connect', 'Invite someone in your home or life into peace.', 'Who needs your presence more than your performance?', 'I connected with peace', 'manual', '{}'::jsonb, null),
      ('home-peace-trail', 5, 'Give', 'Serve someone from peace instead of anxiety.', 'What small act can carry the peace of Christ outward?', 'I gave peace', 'manual', '{}'::jsonb, 'the-word-trail'),

      ('coffee-shop-trail', 1, 'Go', 'Go to the partner location.', 'As you arrive, ask: Lord, what do You want me to notice here?', 'I am at the location', 'location', '{"radiusMeters": 560}'::jsonb, null),
      ('coffee-shop-trail', 2, 'Receive', 'Order a coffee and show your Gold Vein code.', 'Receive the small gift as a tangible sign that grace is already near.', 'I received the small gift', 'redemption', '{}'::jsonb, null),
      ('coffee-shop-trail', 3, 'Look', 'Read 2 Peter 1:3-11.', 'What has been given? What are we told to practice? What does Peter say about entrance into the Kingdom?', 'I experienced the passage', 'manual', '{}'::jsonb, null),
      ('coffee-shop-trail', 4, 'Connect', 'Ask brothers or sisters what they notice in the passage.', 'What did they notice that you did not?', 'I connected with someone', 'manual', '{}'::jsonb, null),
      ('coffee-shop-trail', 5, 'Give', 'Pray for people, serve someone, and share the big treasure of the gospel.', 'Who needs encouragement, truth, prayer, or follow-up?', 'I gave the treasure', 'manual', '{}'::jsonb, 'the-word-trail')
  ) as seed(trail_slug, step_order, step_label, instruction, attention, unlock_label, unlock_type, unlock_config, next_trail_slug)
)
insert into trail_steps (
  trail_id,
  step_order,
  step_label,
  instruction,
  attention,
  unlock_label,
  unlock_type,
  unlock_config,
  next_trail_id
)
select
  trails.id,
  step_seed.step_order,
  step_seed.step_label,
  step_seed.instruction,
  step_seed.attention,
  step_seed.unlock_label,
  step_seed.unlock_type,
  step_seed.unlock_config,
  next_trails.id
from step_seed
join trails on trails.slug = step_seed.trail_slug
left join trails as next_trails on next_trails.slug = step_seed.next_trail_slug
on conflict (trail_id, step_order) do update set
  step_label = excluded.step_label,
  instruction = excluded.instruction,
  attention = excluded.attention,
  unlock_label = excluded.unlock_label,
  unlock_type = excluded.unlock_type,
  unlock_config = excluded.unlock_config,
  next_trail_id = excluded.next_trail_id,
  updated_at = now();

