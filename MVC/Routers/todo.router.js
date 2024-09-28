const router = require('express').Router();
const todoController = require('../Controller/todo.controller');

router.post("/storeToDo", todoController.createToDo);
router.post("/getTodoList", todoController.getTodoList);

module.exports = router;