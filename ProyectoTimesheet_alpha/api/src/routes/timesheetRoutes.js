import express from "express";
import {getTimes, addTime} from "../controllers/timesheet.controller.js";
const router = express.Router();

router.post('/timesheet', addTime);

router.get('/timesheet', getTimes);

export default router;