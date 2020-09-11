exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Project 1",
          description: "This is the description for project 1",
          completed: false,
        },
        {
          id: 2,
          name: "Project 2",
          description: "This is the description for project 2",
          completed: false,
        },
        {
          id: 3,
          name: "Project 3",
          description: "This is the description for project 3",
          completed: false,
        },
      ]);
    });
};
