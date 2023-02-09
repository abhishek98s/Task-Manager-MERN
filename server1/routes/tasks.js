import express from "express";
const router = express.Router();

import {getAllTasks, createTask, getTasks, updateTask, deleteTask} from '../controllers/tasks.js'

router.route("/").get(getAllTasks).post(createTask);
router.route('/:id').get(getTasks).patch(updateTask).delete(deleteTask);

export default router;