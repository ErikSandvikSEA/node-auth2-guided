const db = require("../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findRole
};

function find() {
  return db("users1").select("id", "username").orderBy("id");
}

function findBy(filter) {
  return db("users1 as u")
  .join("roles1 as r", 'u.role', 'r.id')
  .select('u.id', 'u.username', 'u.password', 'r.name as role_name')
  .where(filter)
  .orderBy("u.id");
}

function findRole() {
  return db('roles1').select('name')
}

async function add(user) {
  try {
    const [id] = await db("users1").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users1").where({ id }).first();
}
