import employeSchema from "../models/employe.js"

export const addEmploye = async(req, res) =>{
    try {
        const newEmploye = new employeSchema(req.body);
        const employeSaved = await newEmploye.save()
        
        res.json(employeSaved)


    } catch (error) {
        res.json({message: error})
    }
}

export const getEmployees =  async(req, res) =>{
    try {
        const employees = await employeSchema.find()
        res.json(employees)
    } catch (error) {
        res.json({mesagge: error})
    }
}
export const deleteEmploye = async(req, res) =>{
    const employeId = req.params.id

    try {
        const employe = await employeSchema.findOneAndRemove({_id: employeId})
        if(employe){
            return res.json({message: "Employe deleted successfully"})
        }else{
            return res.json({message: "Employe not found"})
        }
    } catch (error) {
        res.json({message: error})
    }
}

export const updateEmploye =  async(req, res) => {
    const employeId = req.params.id
    const updateData = req.body
    try {
        const employe = await employeSchema.findByIdAndUpdate(employeId, updateData, {new: true})
        if (employe){
            return res.json({message: "Employe updated"})
        }else{
            return res.json({message: "Employe not found"})
        }
    } catch (error) {
        res.json({message: error})
    }
}