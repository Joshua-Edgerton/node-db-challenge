const router = require('express').Router();

const Projects = require('../models/projects-model');

router.get("/", (req, res) => {
    Projects.get()
    .then(projects => {
        let projectList = projects.map(project => {
            return { ...project, completed: project.completed === 0 ? false : true  } 
        })
        res.json(projectList);
    })
    .catch(err => res.status(500).json({ error: "Failed to get all projects." }));
})

router.get("/:id", (req, res) => {
    Projects.get(req.params.id)
    .then(project => res.json({
        ...project,
        completed: project.completed === 0 ? false : true
    }))
    .catch(err => res.status(500).json({ error: "Failed to get project." }))
})

router.get("/:id/tasks", (req, res) => {
    Projects.getTasks(req.params.id)
    .then(tasks => {
        let taskList = tasks.map(task => {
            return { ...task, completed: task.completed === 0 ? false : true  } 
        })
        res.json(taskList)
    })
    .catch(err => res.status(500).json({ error: "Failed to get all project tasks." }))
})

router.post("/", (req, res) => {
    const newProj = req.body;
    Projects.add({
        ...req.body,
        completed: !newProj.completed && false || newProj.completed
    })
    .then(newProject => res.status(201).json(newProject))
    .catch(err => res.status(500).json({ error: "Failed to add new project." }))
})

router.post("/:id/tasks", (req, res) => {
    Projects.addTask(req.params.id, req.body)
    .then(added => res.status(201).json(added))
    .catch(err => res.status(500).json({ error: "Failed to add new task to project." }))
})

module.exports = router;