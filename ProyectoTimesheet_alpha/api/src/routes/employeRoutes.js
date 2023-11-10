import express from 'express';
import {addEmploye , getEmployees , deleteEmploye, updateEmploye}  from "../controllers/employe.controller.js";
const router = express.Router();

router.post('/employes', addEmploye);

router.get('/employes', getEmployees);

router.delete('/employes/:id', deleteEmploye);

router.put('/employes/:id', updateEmploye);

export default router;