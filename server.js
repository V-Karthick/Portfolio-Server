require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

const dbConn = require('./config/db')
const projects = require("./routes/projectRoutes")
const users = require("./routes/userRoutes")

app.use(express.json())
app.use(cors())

const port = process.env.PORT ||7000


app.use("/projects", projects)

app.use("/user", users)

app.get("/", (req, res)=>{
    res.json({
        message:"hello world",
    })
})

app.listen(port, ()=>{
    console.log(`Server is running on the port: ${port}`)
})