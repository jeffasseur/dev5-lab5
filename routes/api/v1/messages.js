var express = require('express');
var router = express.Router();

// GET messages
router.get('/', (req, res, next) => {
    res.send('Getting messages ...');
});

// GET message by id
router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    res.send(`Getting message by id = ${id}`);
});

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