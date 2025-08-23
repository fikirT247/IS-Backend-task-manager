const taskService = require('../data/taskService');
//Get all tasks
function getTasks(req, res) {
    const tasks = taskService.getAllTasks();
    res.status(200).json(tasks);
}
//Get task by ID
function getTaskById(req, res) {
    const tasks = taskService.getTaskById(Number(req.params.id));
    if (!tasks) return res.status(404).json({error: 'OOPSIE! Task not found!'});
    res.status(200).json(tasks);
}
//post task
function createTask(req, res) {
    const {title, description, dueDate, status} = req.body;
    if (!title || !description || !dueDate || !status) {
        return res.status(400).json({error: 'OOPSIE! Missing required fields!'});
    }
    const task = taskService.createTask({title, description, dueDate, status});
    res.status(201).json(task);
}
//update task ID
function updateTask(req, res) {
    const updatedTask = taskService.updateTask(Number(req.params.id), req.body);
    if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(updatedTask);
}
//delete task ID
function deleteTask(req, res) {
    const success = taskService.deleteTask(Number(req.params.id));
    if (!success) return res.status(404).json({error: 'OOPSIE! Task not found!'});
    res.status(204).send();
}
module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};