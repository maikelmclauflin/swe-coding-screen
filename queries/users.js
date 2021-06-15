module.exports = {
  create,
}

const INSERT_USER = `
INSERT INTO users (secret)
VALUES ($1)
RETURNING *`

async function create(db, { secret }, client) {
  const { rows } = await db.query(INSERT_USER, [secret || ''], client)
  return rows[0] || null
}