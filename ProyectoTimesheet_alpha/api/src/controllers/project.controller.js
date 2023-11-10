import projectSchema from "../models/project.js"


export const addProject = async(req, res) => {
    try {
        const newProject = req.body
        const projectSaved = await newProject.save()
        res.json(projectSaved)

    } catch (error) {
        res.json({message: error})
    }
}

export const getProjects = async (req, res) => {
    try {
        const projects = await projectSchema.find()
        res.json(projects)
    } catch (error) {
        res.json({message: error})
    }
}