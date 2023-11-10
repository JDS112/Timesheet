import express from "express";
import {addTask, getAllTask} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/task", addTask);

router.get("/tasks", getAllTask);

export default router;