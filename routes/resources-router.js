const router = require("express").Router();

const Resources = require("../models/resources-model");

router.get("/", (req, res) => {
    Resources.get()
    .then(resources => res.json(resources))
    .catch(err => res.status(500).json({ error: "Failed to get all resources." }))
});

router.get("/:id", (req, res) => {
    Resources.get(req.params.id)
    .then(resource => res.json(resource))
    .catch(err => res.status(500).json({ error: "Failed to get resource." }))
});

router.post("/", (req, res) => {
    Resources.add(req.body)
    .then(added => res.status(201).json(added))
    .catch(err => res.status(500).json({ error: "Failed to add new resource." }))
});

module.exports = router;