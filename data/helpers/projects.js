const db = require("../dbConfig");

module.exports = {
  find,
  findById,
  add,
  getTasks,
  getResources,
};

function find() {
  return db("projects");
}

function findById(id) {
  const project_id = parseInt(id);
  return db("projects").where({ id: project_id }).first();
}

function add(project) {
  return db("projects")
    .insert(project, "id")
    .then((ids) => {
      const [id] = ids;

      return findById(id);
    });
}

function getTasks(id) {
  const project_id = parseInt(id);
  return db("tasks")
    .select(
      "projects.name",
      "projects.description as project_description",
      "tasks.notes",
      "tasks.id",
      "tasks.project_id"
    )
    .join("projects", "tasks.project_id", "projects.id")
    .where({ project_id });
}

function getResources(id) {
  const project_id = parseInt(id);
  return db("project_resources")
    .select(
      "resources.id as resource_id",
      "projects.id as project_id",
      "projects.name as project_name",
      "resources.name as resource_name",
      "projects.description as project_description",
      "resources.description as resource_description"
    )
    .join("projects", "project_resources.project_id", "projects.id")
    .join("resources", "project_resources.resource_id", "resources.id")
    .where("projects.id", project_id);
}
