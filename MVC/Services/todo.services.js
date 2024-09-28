const todoModel = require('../Models/todo.model');

class ToDoServices {

    static async createToDo(userId, title, desc, isDone) {
        const todoObject = new todoModel({userId, title, desc});
        return await todoObject.save();
    }

    static async getTodoData(userId) {
        const todoData = await todoModel.find({userId});
        return await todoData;
    }

}

module.exports = ToDoServices;