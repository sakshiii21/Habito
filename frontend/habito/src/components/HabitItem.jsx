import React from "react";

function HabitItem({id,text,doneToday,onDelete,ToggleHabit}){
    return(
        <div>
            <button onClick={() =>ToggleHabit(id)}>{doneToday ? "done" : "notDone"}</button>
            <p>{text}</p>
            <button onClick={() => onDelete(id)}>delete</button>
        </div>
    )
}
export default HabitItem