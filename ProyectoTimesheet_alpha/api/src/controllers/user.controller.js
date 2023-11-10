import userSchema from "../models/user.js";
import bcrypt from "bcrypt"
export const register = async(req, res) => {
    try {
        const {username,email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new userSchema({
            username: username,
            email: email,
            password: hashedPassword
        })
        const userSaved = await newUser.save()

        res.json(userSaved)
    } catch (error) {
        res.json({ message: error})
    }
};
export const login = async(req, res) => {
    const {email, password} = req.body;

    try {
        const userFound = await userSchema.findOne({"email": email});
        if (!userFound){
            res.status(400).json({ message: "Password is incorrect" });
        }
        const passwordMatch = await bcrypt.compare(password, userFound.password)

        console.log(passwordMatch)
        console.log(password)
        if(!passwordMatch){
            res.status(400).json({ message: "Password is incorrect" });
        }
        else{
            res.json({message: "Login successful"})
            console.log("200")

        }
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const traerUsers = async(req, res) => {
    try {
        const users = await userSchema.find()
        res.json(users)

    } catch (error) {
        res.json({ message: error})
    }

}
