exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const roles = [
    {
      name: "admin", // will get id 1
    },
    {
      name: "user", // will get id 2
    },
  ];

  return knex("roles1")
    .insert(roles)
    .then(() => console.log("\n== Seed data for roles table added. ==\n"));
};
