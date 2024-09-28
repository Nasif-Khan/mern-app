import { User } from "../models/user.model.js"
import {Router} from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { registerUser } from "../controllers/user.controller.js"


const router = Router()

router.get('/',async (req,res) => res.send("User Route"))

router.route("/register").post(registerUser)

// router.post('/signup', async (req, res) => {

//     const {name, email, password} = req.body
//     console.log("Req.body")
//     console.log(req.body)
//     try {
//         let user = await User.findOne({email})
//         if(user){
//             // console.log(user)
//             return res.status(400)
//                     .json({errors: [{msg: "User exists!"}]})
//         }

//         const salt = await bcrypt.genSalt()
//         const hashedPassword = await bcrypt.hash(password, salt)
//         user = await User.create({
//             name,
//             email,
//             password: hashedPassword
//         })
//         // user.password = await bcrypt.hash(password, salt)
//         console.log(password)
//         console.log(hashedPassword)

//         const payload = {
//             id: user.id
//         }

//         jwt.sign(payload, 
//             process.env.JWT_SECRET,
//             {expiresIn: 3600},
//             (err, token) => {
//                 if (err) throw err
//                 res.json({token});
//             }
//         )
        
//         // return res.status(200).json({
//         //     user,
//         //     msg: "User created!"
//         // });

//         // res.json(req.body)

//     } catch (error) {
//         console.log(error.msg)
//         res.status(500).send("Server error") 
//     }
// })

export default router
// module.exports = router

