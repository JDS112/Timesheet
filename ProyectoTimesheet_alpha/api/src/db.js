import mongoose from "mongoose";

export const connect = async () =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/timesheet")
        console.log("La conexion se realizo con exito")
    }catch(e){
        console.error(e)
    }
}