const express = require("express");
const Tasks = require("../../data/helpers/tasks");
const router = express.Router();

router.get("/", (req, res) => {
  Tasks.find()
    .then((tasks) => {
      const bTasks = tasks.map((task) => ({
        ...task,
        completed: Boolean(task.completed),
      }));
      res.status(200).json(bTasks);
    })
    .catch(() => {
      res.status(500).json({ error: "unable to fetch all tasks" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Tasks.findById(id)
    .then((task) => {
      if (task) {
        const bTask = { ...task, completed: Boolean(task.completed) };
        res.status(200).json(bTask);
      } else {
        res.status(404).json({ message: "task not found" });
      }
    })
    .catch(() => {
      res.status(500).json({ error: "unable to get task" });
    });
});

router.post("/", (req, res) => {
  const taskData = req.body;
  Tasks.add(taskData)
    .then((task) => {
      const bTask = { ...task, completed: Boolean(task.completed) };
      res.status(201).json(bTask);
    })
    .catch(() => {
      res.status(500).json({ error: "unable to add new task" });
    });
});

module.exports = router;
