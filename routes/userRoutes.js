const express = require("express")

const router = express.Router();

const User = require("../models/userModel")

router.get("/view",async(req, res)=>{
    try {
        const profile = await User.findOne()
        if(!profile)
        {
            res.json({
                message:"No details is there"
            })
        }
        res.status(200).json(profile)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/add",async(req, res)=>{
    try {
        const newProfile = new User(req.body)
        const{name, content} = newProfile
        if(!name || !content)
        {
            res.status(400).json({
                message:"Name and content is required"
            })
        }
        const savedata = await newProfile.save()
        res.status(201).json(savedata)
    } catch (error) {
        res.json(error).status(500)
    }
})

router.put("/edit/:id", async(req, res)=>{
    try {
        const id = req.params.id 
        // const {name, content} = data
        // const savedata = await data.save()
        const data = req.body
        const {name, content} = data
        if(name || content)
        {
            const updateProfile = await User.findByIdAndUpdate(id, data, {new:true})
            res.status(200).json({
                message:"Updated the profile"
            })
        }
        
        // res.status(200).json(savedata)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router