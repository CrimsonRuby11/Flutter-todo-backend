const toDoServices = require('../Services/todo.services');

exports.createToDo = async (req, res, next) => {
    try {
        const {userId, title, desc} = req.body;

        let todo = await toDoServices.createToDo(userId, title, desc);

        res.json({status: true, success: todo});
    } catch(err) {
        next(err);
    }
};

exports.getTodoList = async (req, res, next) => {
    try {
        const {userId} = req.body;
        let todoData = await toDoServices.getTodoData(userId);
        res.json({status: true, success: todoData})
    }
    catch(err) {
        next(err);
    }
};