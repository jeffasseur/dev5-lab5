const getAll = (req, res) => {
    // check if parameter user is present
    if (req.query.user) {
        res.json({
            "status": "success",
            "message": `GETTING messages for  username = ${req.query.user}`,
            "data": {
                "user": req.query.user,
            }
        });
    }
    else {
        res.json({
            "status": "success",
            "message": "GETTING messages",
        });
    }
}

const getById = (req, res) => {
    let id = req.params.id;
    // res.send(`Getting message by id = ${id}`);
    res.json({
        "status": "success",
        "message": `Getting message by id = ${id}`,
        "data": {
            "id": id,
        }
    });
}

const create = (req, res) => {
    let user = req.body.user;
    let text = req.body.text;
    res.json({
        "status": "success",
        "message": `POSTING a new message for user ${user}`,
        "data": {
            "user": user,
            "text": text,
        }
    });
}

const update = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "message": `UPDATING a message with id = ${id}`,
        "data": {
            "id": id,
        }
    });
}

const deleteMessage = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "message": `DELETING a message with id = ${id}`,
        "data": {
            "id": id,
        }
    });
}


module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.create = create;
module.exports.update = update;
module.exports.deleteMessage = deleteMessage;