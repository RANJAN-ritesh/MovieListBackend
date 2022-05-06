const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./controllers/movies.controller")

app.use(express.json())

app.use("/",router)

mongoose.connect("mongodb+srv://riteshRanjan:1vG7perWlwzhzdxQ@cluster0.fk5dj.mongodb.net/moviesStore_backend?retryWrites=true&w=majority",()=>{
    console.log("connected to db")
})

app.listen(3001,()=>{
    console.log("running on 3001")
})