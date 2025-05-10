const prisma = require('./../../db');

exports.fetchAllTasks = async () => {
    const tasks = await prisma.task.findMany();
    return tasks;
}

exports.createTask = async (data) => {
    const task = await prisma.task.create({data});
    return task;
}

exports.findTaskById = async (id) => {
    const myTask = await prisma.task.findUnique({where: {id}});
    return myTask;
}

exports.updateTask = async (id , data) => {
    const myTask = await prisma.task.findUnique({where: {id}});
    if (!myTask) return null;
    const updatedTask = await prisma.task.update({
        where: {id },
        data
    })

    return updatedTask;
}

exports.deleteTask = async (id) => {
    const myTask = await prisma.task.findUnique({where: {id}});
    if (!myTask) return null;
    const deleteTask = await prisma.task.delete({
        where: {
            id
        }
    })
    return deleteTask;
}