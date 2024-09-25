const mongoose = require("mongoose")

mongoose.connect(process.env.MONGOURL)

const connection = mongoose.connection;
connection.on('connected', ()=>{
    console.log("Connected to database")
})

connection.on('error', ()=>console.log("DB Error"))

module.exports = mongoose;