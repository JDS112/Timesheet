import mongoose from "mongoose";

const timeSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    dia: {
        type: String,
        require: true
    },
    entrada: {
        type: String,
        require: true
    },
    salida: {
        type: String,
        require: true
    },
    observacion: {
        type: String,
        require: false
    }
})

const timeModel = mongoose.model('Time', timeSchema)
export default timeModel;