exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "Do this part of the project",
          project_id: 1,
        },
        {
          id: 2,
          description: "Then do this other part",
          notes: "This step is required in order to make other thing look good",
          project_id: 1,
          completed: true,
        },
        {
          id: 3,
          description: "Then do the last part",
          project_id: 1,
        },
        {
          id: 4,
          description: "Do this part of the project",
          project_id: 2,
          completed: true,
        },
        {
          id: 5,
          description: "Then do this other part",
          notes: "This step is required in order to make other thing look good",
          project_id: 2,
        },
        {
          id: 6,
          description: "Then do the last part",
          project_id: 2,
        },
        {
          id: 7,
          description: "Do this part of the project",
          project_id: 3,
        },
        {
          id: 8,
          description: "Then do this other part",
          notes: "This step is required in order to make other thing look good",
          project_id: 3,
        },
        {
          id: 9,
          description: "Then do the last part",
          project_id: 3,
          completed: true,
        },
      ]);
    });
};
