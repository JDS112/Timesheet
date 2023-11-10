import express from "express"
import cors from "cors"
import {connect} from "./db.js"
import userRoutes from "./routes/userRoutes.js"
import employeRoutes from "./routes/employeRoutes.js"
import timesRoutes from "./routes/timesheetRoutes.js"
import taskRoutes from "./routes/taskRoute.js"
import projectRoutes from "./routes/projectRoutes.js"
const app = express()
app.use(cors())
connect()
const port = 3000

app.use(express.json())

app.use("/api",userRoutes)
app.use("/api",employeRoutes)
app.use("/api",timesRoutes)
app.use("/api",taskRoutes)
app.use("/api", projectRoutes)


app.listen(port, () => console.log("Servidor escuchando en el puerto "+port))