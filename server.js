import express from "express"
import dotenv from "dotenv";

import connectDB from "./src/db/db.js"
import router from "./src/routers/user.router.js"

dotenv.config({path: "./.env"});


const app = express()

const PORT = process.env.PORT || 4000

connectDB()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));


app.use('/user', router); 



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))