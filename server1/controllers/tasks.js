import Task from "../modules/tasks.js";
import asyncWrapper from "../middelware/async.js";
import { createCustomError } from "../error/custom-error.js";

const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({});

    res.status(201).json({ tasks });
})


const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body);

    res.status(201).json({ task });
})


const getTasks = asyncWrapper(async (req, res, next) => {

    const { id: taskID } = req.params;

    const task = await Task.findOne({ _id: taskID });

    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }

    res.status(200).json({ task });
})


const updateTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }

    res.send(200).json({ task });

})

const deleteTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params;

    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }

    res.status(200).json({ task });
})

export { getAllTasks, createTask, getTasks, updateTask, deleteTask };