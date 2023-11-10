import taskSchema from "../models/task.js"


export const addTask = async(req, res) => {
    try {
        const newTask = new taskSchema(req.body)
        const taskSaved = await newTask.save()

        res.json(taskSaved)
    } catch (error) {
        req.json({message : error})
    }
}

export const getAllTask = async (req, res) => {
    try {
        const allTasks = await taskSchema.find()
        res.json(allTasks)
    } catch (error) {
        res.json({message : error})
    }
}

export const getTask = async (req, res) => {
    const username = req.params.username
    const tasks = await taskSchema.find({username: username})
}

export const updateTask = async (req, res) => {
    const id = req.params.id
    const updateTask = req.body
    try {
        const task = await taskSchema.findByIdAndUpdate(id, updateTask, {new: true})
        if (task) {
            res.json({message: 'Task updated successfully'})
        }else{
            res.json({message: 'Task not found'})
        }
    } catch (error) {
        res.json({message: error})
    }

}