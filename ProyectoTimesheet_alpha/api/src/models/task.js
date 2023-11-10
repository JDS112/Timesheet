import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    tarea: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    proyecto: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    }
})
const taskModel = mongoose.model('Task', taskSchema);
export default taskModel;