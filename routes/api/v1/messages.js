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
router.post('/', messageController.create);

// PUT message by id
router.put('/:id', messageController.update);

// DELETE message by id
router.delete('/:id', messageController.deleteMessage);

module.exports = router;