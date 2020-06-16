exports.up = function (knex) {
     return knex.schema
       .createTable("roles1", tbl => {
         tbl.increments();
   
         tbl.string("name", 128).notNullable().unique();
       })
       .createTable("users1", tbl => {
         tbl.increments();
   
         tbl.string("username", 128).notNullable().unique().index();
         tbl.string("password", 256).notNullable();
   
         tbl
           .integer("role")
           .unsigned()
           .references("roles1.id")
           .onDelete("RESTRICT")
           .onUpdate("CASCADE");
   
           tbl
           .string("role_name")
           .references("roles1.name")
           .onDelete("RESTRICT")
           .onUpdate("CASCADE");
       });
   };
   
   exports.down = function (knex) {
     return knex.schema
     .dropTableIfExists("roles1")
     .dropTableIfExists("users1");
   };
   