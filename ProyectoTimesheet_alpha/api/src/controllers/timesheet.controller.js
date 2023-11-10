import timeSchema from "../models/time.js"

export const getTimes = async(req, res) =>{
    try {
        const timesheets = await timeSchema.find()
        res.json(timesheets)
    } catch (error) {
        res.json({message: error})
    }
}
export const addTime = async(req, res) =>{
    try {
        const newTime = new timeSchema(req.body);
        const timeSaved = await newTime.save()
        
        res.json(timeSaved)


    } catch (error) {
        res.json({message: error})
    }
}