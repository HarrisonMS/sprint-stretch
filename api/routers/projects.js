const express = require("express");
const Projects = require("../../data/helpers/projects");
const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then((projects) => {
      const bProjects = projects.map((project) => ({
        ...project,
        completed: Boolean(project.completed),
      }));
      res.status(200).json(bProjects);
    })
    .catch(() => {
      res.status(500).json({ error: "unable to fetch all projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.findById(id)
    .then((project) => {
      if (project) {
        const bProject = { ...project, completed: Boolean(project.completed) };
        Projects.getTasks(id).then((tasks) => {
          bProject.tasks = tasks.map((task) => ({
            ...task,
            completed: Boolean(task.completed),
          }));
          res.status(200).json(bProject);
        });
      } else {
        res.status(404).json({ message: "project not found" });
      }
    })
    .catch(() => {
      res.status(500).json({ error: "unable to get project" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.getTasks(id)
    .then((tasks) => {
      const bTasks = tasks.map((task) => ({
        ...task,
        completed: Boolean(task.completed),
      }));
      res.status(200).json(bTasks);
    })
    .catch(() => {
      res.status(500).json({ error: "unable to get tasks for this project" });
    });
});

router.get("/:id/resources", (req, res) => {
  const { id } = req.params;
  Projects.getResources(id)
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "unable to get resources for this project" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;
  Projects.add(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(() => {
      res.status(500).json({ error: "unable to add new project" });
    });
});

module.exports = router;
