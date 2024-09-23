import express from "express"
import dotenv from "dotenv";
import connectDB from "./src/db/db.js"

dotenv.config({path: "./.env"});


const app = express()

const PORT = process.env.PORT || 3000

connectDB()

app.get('/', (req, res) => res.send("API is running"))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))