const getAll = (req, res) => {
    // res.send('Getting messages ...');
    res.json({
        "status": "success",
        "data": "Getting messages ...",
    });
}

const getById = (req, res) => {
    let id = req.params.id;
    // res.send(`Getting message by id = ${id}`);
    res.json({
        "status": "success",
        "data": `Getting message by id = ${id}`,
    });
}

module.exports.getAll = getAll;
module.exports.getById = getById;