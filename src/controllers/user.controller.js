import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {  
    const {name, email, password} = req.body
    console.log("Req.body")
    console.log(req.body)
    try {
        let user = await User.findOne({email})
        if(user){
            // console.log(user)
            return res.status(400)
                    .json({errors: [{msg: "User exists!"}]})
        }

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        
        const payload = {
            id: user.id
        }

        jwt.sign(payload, 
            process.env.JWT_SECRET,
            {expiresIn: 3600},
            (err, token) => {
                if (err) throw err
                res.json({token});
            }
        )
        
    } catch (error) {
        console.log(error.msg)
        res.status(500).send("Server error") 
    }
}

export {registerUser}