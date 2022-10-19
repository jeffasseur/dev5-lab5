const express = require('express');
const router = express.Router();
const messageController = require('./../../../controllers/api/v1/messages');

// GET messages
router.get('/', messageController.getAll);

// GET message by id
router.get('/:id', messageController.getById);

// GET messages by username
// router.get('?user', (req, res, next) => {
//     let username = req.query.username;
//     res.send(`Getting messages by username = ${username}`);
// });

// POST messages
router.post('/', (req, res, next) => {
    res.send('Posting messages ...');
});

// PUT message by id
router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    res.send(`Putting message by id = ${id}`);
});

// DELETE message by id
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    res.send(`Deleting message by id = ${id}`);
});

module.exports = router;