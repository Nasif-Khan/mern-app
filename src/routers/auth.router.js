import express, {Router} from "express"
import { User } from "../models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.get('/', verifyJWT, async (req, res) => {
    console.log("GET request received");
    try {
        const user = await User.findById(req.id).select("-password");
        res.json(user);
    } catch (err) {
        console.error("Server error:", err.message);
        res.status(500).send("Server error");
    }
});

router.post('/', async(req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({msg: "Invalid email"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({msg: "Invalid password"})
        }

        const payload = {
            id: user.id
        }

        jwt.sign(payload,
            process.env.JWT_SECRET,
            {expiresIn: 3600},
            (err, token) => {
                if(err) throw err
                res.json({token})
            }
        )
    } catch (err) {
        console.log(err.message)
        res.status(500).send(" error")
    }
})

export default router
