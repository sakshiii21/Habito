import React from "react";
import HabitItem from "./HabitItem.jsx";

function HabitList({habits , onDelete , ToggleHabit}){
    return(
        <div>
            {habits.map((habit)=> (<HabitItem 
            key={habit.id} 
            id={habit.id}  
            text={habit.text}
            doneToday={habit.doneToday}
            onDelete={onDelete} 
            ToggleHabit={ToggleHabit} />))}
        </div>
    )
}

export default HabitList;