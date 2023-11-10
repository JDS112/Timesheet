import express from "express"
import { register, traerUsers, login} from "../controllers/user.controller.js"
const router = express.Router()

//create new user
router.post("/register", register)

router.get("/users", traerUsers)

router.post("/login", login)

export default router;