import express from "express";
import cors from "cors"; // browser security enforcement , helps in achieving conversations without protocol
import dotenv from "dotenv";
import mongoose from "mongoose";
import Habit from "./models/Habit.js";


dotenv.config() // to check if dot env file is loading or not
const port = process.env.PORT;

//express server setup
const app = express(); // initializes express object
app.use(express.json()); //tells app to parse json
app.use(cors()); // uses cors here

// //checking
// app.get('/',(req,res) => {
//     res.send("success get request");
// })
// // '/' -> path 
// // port -> portno.

//connecting mongodb
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("database connected")}).catch(err => console.log(err));

// working on habits

// app.post('/habits',(req,res)=>{
//     res.send("got it") // res send before updating databse + async function 
//     Habit.create(req.body);
// })

//create new habit
app.post('/habits',async (req,res) =>{
    try{
    const habit = await Habit.create(req.body)
    res.send(habit)
    }
    catch(err){
        console.log(err)
        res.status(500).send("couldn't create habit")
    } 
})

// get habits
app.get('/habits',async (req,res) => {
    try{
        const habit = await Habit.find()
        res.json(habit)
    }
    catch(err){
        console.log(err)
        res.status(500).send("couldn't get habit")
    }
})

//patch
app.patch('/habits/:id', async (req,res)=>{
    try{
        const habit = await Habit.findById(req.params.id)
        const newHabitUpdate = !habit.taskCompleted
        const updatedHabit = await Habit.findByIdAndUpdate(req.params.id ,{taskCompleted:newHabitUpdate},{new:true})
        res.json(updatedHabit)
    }
    catch(err){
        console.log(err)
        res.status(500).send("couldn't update habit")
    }
})

//delete Habit
app.delete('/habits/:id', async (req,res) => {
    try{
        const habit = await Habit.findByIdAndDelete(req.params.id)
        res.json(habit)
    }
    catch(err){
        console.log(err)
        res.status(500).send("can't delete habit")
    }
})



app.listen(port,() => {
    console.log("listening on port no-"+port)
})