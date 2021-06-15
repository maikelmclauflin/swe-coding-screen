CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  secret TEXT NOT NULL DEFAULT ''
);

-- maybe create a separate messages table
-- if there will be a lot of messages
-- or it would be advantageous to access separately
-- CREATE TABLE IF NOT EXISTS messages(
--   id TEXT NOT NULL PRIMARY KEY,
--   -- could also put timestamps here
--   message TEXT NOT NULL
-- );

CREATE TABLE IF NOT EXISTS statuses(
  id SERIAL PRIMARY KEY,
  -- timestamps here
  user_id INT NOT NULL REFERENCES users(id),
  message TEXT NOT NULL
);
