const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    }
})

const Project =mongoose.model("Projects", projectSchema)
module.exports = Project