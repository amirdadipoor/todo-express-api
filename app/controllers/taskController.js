const taskActions = require('./../actions/taskActions');
const prisma = require("../../db");

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = taskActions.fetchAllTasks();
        res.json(tasks);
    }catch (error) {
        res.status(500).json({error: 'Failed to retrieve tasks.' });
    }
}

exports.getTaskById = async (req, res) => {
    try {
        const id = parseInt(req.params.id) ;
        const tasks = taskActions.findTaskById(id);
        res.json(tasks);
    }catch (error) {
        res.status(500).json({error: 'Failed to retrieve tasks.' });
    }
}

exports.createTask = async (req, res) => {
    try {
        const data = {task : req.body.task};
        const task = await prisma.task.create(data);
        res.json(task);
    }catch (error) {
        res.status(500).json({error: 'Failed to create tasks.' });
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const id = parseInt(req.params.id) ;
        const tasks = taskActions.deleteTask(id)
        if (!tasks) res.status(404).json({error: 'Failed to delete tasks.'});
        res.json(tasks);
    }catch (error) {
        res.status(500).json({error: 'Failed to delete lists.' });
    }
}

exports.updateTask = async (req, res) => {
    try {
        const id = parseInt(req.params.id) ;
        const data = {task : req.body.task};
        const tasks = taskActions.updateTask(id , data)
        if (!tasks) res.status(404).json({error: 'Failed to delete tasks.'});
        res.json(tasks);
    }catch (error) {
        res.status(500).json({error: 'Failed to retrieve lists.' });
    }
}