exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          name: "Pen",
          description: "can be used to write on a few surfaces, mainly paper",
        },
        {
          id: 2,
          name: "Paper",
          description: "has many uses, typically used for writing on",
        },
        {
          id: 3,
          name: "Glue",
          description: "used to bind things together",
        },
        {
          id: 4,
          name: "Towel",
        },
        {
          id: 5,
          name: "Plywood",
        },
        {
          id: 6,
          name: "Laptop",
          description: "Mid tier laptop",
        },
      ]);
    });
};
