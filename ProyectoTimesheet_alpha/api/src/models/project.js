import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    descripcion:{
        type: String,
        require: true
    },
    cantidad_empleado:{
        type: String,
        require: true
    }
})
const projectModel = mongoose.model("Project", projectSchema)
export default projectModel