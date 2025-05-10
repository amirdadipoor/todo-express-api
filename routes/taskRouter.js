const express = require('express');
const taskController = require('./../app/controllers/taskController');
const router = express.Router();

// GET get all tasks
router.get('/', taskController.getAllTasks);

// POST create new task
router.post('/', taskController.createTask);

// PUT update task
router.put('/:id', taskController.updateTask);

// GET get task by id
router.get('/:id', taskController.getTaskById);

// DELETE delete task by id
router.delete('/:id', taskController.deleteTask);


module.exports = router;
