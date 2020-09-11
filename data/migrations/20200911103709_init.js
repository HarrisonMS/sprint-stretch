exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).unique().notNullable();
      tbl.text("description");
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).unique().notNullable();
      tbl.text("description");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.text("description").notNullable();
      tbl.text("notes");
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("project_resources", (tbl) => {
      tbl.primary(["project_id", "resource_id"]);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
