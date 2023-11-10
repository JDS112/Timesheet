import mongoose from "mongoose";

const employeSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido:{
        type: String,
        require: true
    },
    direccion:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    telefono:{
        type: String,
        require: true
    },
    fecha_nacimiento:{
        type: String,
        require: true
    }
})
const employeModel = mongoose.model("Employe", employeSchema)
export default employeModel