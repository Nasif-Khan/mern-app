import {Router} from "express"
import bcrypt from "bcryptjs"
import { User } from "../models/User.model.js"

const router = Router()

router.get('/',async (req,res) => res.send("User Route"))



router.post('/signup', async (req, res) => {

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

        user = await User.create({
            name,
            email,
            password
        })

        const salt = await bcrypt.genSalt()
        user.password = await bcrypt.hash(password, salt)
        
        return res.status(200).json({
            user,
            msg: "User created!"
        });

        // res.json(req.body)

    } catch (error) {
        console.log(error.msg)
        res.status(500).send("Server error") 
    }
})

export default router
// module.exports = router

