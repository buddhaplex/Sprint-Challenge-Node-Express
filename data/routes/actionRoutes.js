const express = require("express");
const router = express.Router();
const db = require("../helpers/actionModel.js");

router.get("/", (req, res) => {
  db
    .get()
    .then(actions => {
      res.status(200).json({ actions });
    })
    .catch(error => {
      res.status(500).json({ error: "Error getting actions." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db
    .get(id)
    .then(action => {
      res.status(200).json({ actions });
    })
    .catch(error => {
      res.status(500).json({ error: `Error getting action ${id}` });
    });
});

router.post("/", (req, res) => {
  const { project_id, description } = req.body;
  const newAction = req.body;

  if (!project_id || !description) {
    res.status(400).json({ error: 'Please include both Project ID and Description'});
  }

  if (description.length > 128) {
    res.status(400).json({ error: 'Description cannot exceed 128 characters' });
  }

  db
    .insert(newAction)
    .then(newAction => {
      res.status(201).json({ actions });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.put("/:id", (req, res) => {
  const { project_id, description } = req.body;
  const { id } = req.params;
  const updateAction = req.body;

  if (!project_id || !description) {
    res.status(400).json({ error: 'Please provide both Project ID and Description' });
  }

  if (description.length > 128) {
    res.status(400).json({ error: 'Description cannot exceed 128 characters' });
  }


  db
    .update(id, updatedAction)
    .then(updatedAction => {
      res.status(200).json({ updatedAction });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  
  db
    .remove(id)
    .then(actions => {
      res.status(200).json({ actions });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = router;
