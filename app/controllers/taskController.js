const taskActions = require('./../actions/taskActions');
const prisma = require("../../db");

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskActions.fetchAllTasks();
        //console.log(tasks)
        res.json(tasks);
    }catch (error) {
        res.status(500).json({error: 'Failed to retrieve tasks.' });
    }
}

exports.getTaskById = async (req, res) => {
    try {
        const id = parseInt(req.params.id) ;
        const tasks = await taskActions.findTaskById(id);
        if (!tasks) res.status(404).json({error: 'Failed to find tasks.'});
        else res.json(tasks);
    }catch (error) {
        res.status(500).json({error: 'Failed to retrieve tasks.' });
    }
}

exports.createTask = async (req, res) => {
    try {
        const data = {task : req.body.task};
        const task = await taskActions.createTask(data);
        res.json(task);
    }catch (error) {
        res.status(500).json({error: 'Failed to create tasks.' });
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const id = parseInt(req.params.id) ;
        const tasks = await taskActions.deleteTask(id)
        if (!tasks) res.status(404).json({error: 'Failed to delete tasks.'});
        else res.json(tasks);
    }catch (error) {
        res.status(500).json({error: 'Failed to delete lists.' });
    }
}

exports.updateTask = async (req, res) => {
    try {
        const id = parseInt(req.params.id) ;
        const data = {task : req.body.task , done : req.body.done};
        const tasks = await taskActions.updateTask(id , data)
        if (!tasks) res.status(404).json({error: 'Failed to update tasks.'});
        else res.json(tasks);
    }catch (error) {
        res.status(500).json({error: 'Failed to update tasks.' });
    }
}