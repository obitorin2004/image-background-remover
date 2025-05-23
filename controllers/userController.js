import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({success:false, message: "Please fill all fields" });
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({success:false, message: "User already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        
        
        const token = jwt.sign({ id: newUser._id, email: newUser.email },process.env.JWT_SECRET, {
            expiresIn: "7d"
        })
        
        await newUser.save()
      
      newUser.password = undefined

      res.cookie("token",token, {
        httpOnly: false,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000   // 7 days 
        })
        res.status(201).json({success:true, message: "User created successfully", user: newUser, token })



    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "Internal Server Error" });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({success:false, message: "Please fill all fields" });
        }

        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(400).json({success:false, message: "User does not exist" })
        }
        const isMatch = await bcrypt.compare(password, existingUser.password)
        if (!isMatch) {
            return res.status(400).json({success:false, message: "Invalid credentials" })
        }

        const token = jwt.sign({ id: existingUser._id, email: existingUser.email }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })

        existingUser.password = undefined

        res.cookie("token", token, {
            httpOnly: false,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000   // 7 days 
        })

        res.status(200).json({success:true, message: "User logged in successfully", user: existingUser, token })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success:false,message: "Internal Server Error" });
    }

}
export{register,login}