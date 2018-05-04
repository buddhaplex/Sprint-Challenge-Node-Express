const express = require('express');
const router = express.Router();
const db = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
  db
  .get()
  .then(actions => {
    res.status(200).json({ actions });
  })
  .catch(error => {
    res.status(500).json({ error });
  });
});

router.post('/actions', (req, res, next) => {
  const actionInformation = req.body;
  console.log('user information', actionInformation);

  db
    .insert(actionInformation)ç
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      console.log(err);
      logErrorToDatabase(err);

      next(err);
    });
});


router.delete('/actions', function(req, res) {
  const { id } = req.query;
  let user;
  db
    .findById(id)
    .then(foundAction => {
      user = { ...foundAction[0] };

      db.remove(id).then(response => {
        res.status(200).json(user);
      });
    })
    .catch(err => {
      res.status(500).json({ erro: err });
    });
});

router.put('/actions/:id', function(req, res) {
  const { id } = req.params;
  const update = req.body;

  db
    .update(id, update)
    .then (count => {
      if (count === 1) res.json('successfully updated')
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/actions', (req, res) => {
  db
    .get()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err });
      // do something with the error
    });
});

// /123
router.get('/actions/:id', (req, res) => {
  const id = req.params.id;

  db
    .get(id)
    .then(actions => {
      // console.log(users);
      if (users === undefined) {
        res.status(404).json({ message: 'action not found' });
      } else {
        res.json(actions);
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;