import mongoose from "mongoose";

// creating mongoose schema - new mongoose.Schema({ fields })

const taskSchema = new mongoose.Schema({
    taskName:String ,
    taskCompleted: Boolean
})

// creating model - actually used, schema without model is useless

const Habit = mongoose.model("Habit" , taskSchema)

// export model
export default Habit;