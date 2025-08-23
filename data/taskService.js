const Task = require('../models/task');
let tasks = [];
let currentId = 1;

//Get all tasks
function getAllTasks() {
    return tasks;
}
//Get task by ID
function getTaskById(id) {
    return tasks.find(task => task.id === id);
}
//Create a new task
function createTask({title, description, dueDate, status}) {
    const task = new Task(currentId++, title, description, dueDate, status);
    tasks.push(task);
    return task;
}
//Update a task
function updateTask(id, updatedFields) {
    const task = getTaskById(id);
    if (!task) {
        return null;
    }
    Object.assign(task, updatedFields);
    return task;
}
//Delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        return false;
    }
    tasks.splice(index, 1);
    return true;   
}
//Exporting the functions
module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};