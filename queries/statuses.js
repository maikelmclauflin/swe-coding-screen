module.exports = {
  create,
}

const INSERT_STATUS = `
INSERT INTO statuses (user_id, message)
VALUES ($1, $2)
RETURNING *`

async function create(db, { userId, message }, client) {
  const { rows } = await db.query(INSERT_STATUS, [userId, message], client)
  return rows[0] || null
}
