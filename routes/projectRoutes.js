const express = require("express")

const router=express.Router()

const Project = require("../models/projectModel")

router.get("/all",async(req, res)=>{
    try {
        const fetchProjects = await Project.find()
        if(fetchProjects)
        {
            res.json(fetchProjects).status(200)
        }
        else
        {
            res.json({
                message:"No data is present"
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/add",async(req, res)=>{
    try {
        const newProject = new Project(req.body)
        const{title, desc} = newProject
        if(!title || !desc)
        {
            res.status(400).json({
                message:"Title and desc is required"
            })
        }
        const savedata = await newProject.save()
        res.status(201).json(savedata)
    } catch (error) {
        res.json(error).status(500)
    }
})

router.put("/edit/:id", async(req, res)=>{
    try {
        const id = req.params.id;
        const currentrecord = await Project.findOne({_id : id})
        if(!currentrecord){
            res.status(404).json({message:"Project not found!"})
        }
        const updateProject = await Project.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json(updateProject)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/delete/:id", async(req, res)=>{
    try {
        const id = req.params.id;
        const currentrecord = await Project.findOne({_id:id})
        if(!currentrecord)
        {
            res.status(404).json({message:"Project not found"})
        }
        const deleteProject = await Project.findByIdAndDelete(id)
        res.status(200).json({message:"Project Deleted!"})
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router