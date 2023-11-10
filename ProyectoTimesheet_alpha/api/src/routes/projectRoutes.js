import express from "express";
import {addProject, getProjects} from "../controllers/project.controller.js";

const router = express.Router()

router.post("/project",addProject)

router.get("/projects", getProjects)

export default router