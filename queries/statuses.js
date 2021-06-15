module.exports = {
  create,
  byUserId,
  latest,
}

const INSERT_STATUS = `
INSERT INTO statuses (user_id, message)
VALUES ($1, $2)
RETURNING *`

const GET_STATUSES_BY_USER_ID = `
SELECT *
FROM statuses
WHERE user_id = $1`

const GET_LATEST_STATUSES = `
SELECT *
FROM statuses
ORDER BY id DESC
LIMIT $1
OFFSET $2`

async function create(db, { userId, message }, client) {
  const { rows } = await db.query(INSERT_STATUS, [userId, message], client)
  return rows[0] || null
}

async function byUserId(db, { userId }, client) {
  const { rows } = await db.query(GET_STATUSES_BY_USER_ID, [userId], client)
  return rows
}

async function latest(db, { limit, offset }, client) {
  const { rows } = await db.query(GET_LATEST_STATUSES, [limit, offset], client)
  return rows
}
