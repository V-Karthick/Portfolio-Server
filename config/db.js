const mongoose = require("mongoose")

mongoose.connect(process.env.MONGOURL || "mongodb+srv://admin:admin@portfoliodatabase.x4b1p.mongodb.net/?retryWrites=true&w=majority&appName=PortfolioDatabase")

const connection = mongoose.connection;
connection.on('connected', ()=>{
    console.log("Connected to database")
})

connection.on('error', ()=>console.log("DB Error"))

module.exports = mongoose;