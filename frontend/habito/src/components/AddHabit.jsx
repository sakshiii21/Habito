import React from "react";

function AddHabit({newHabit , CreateNewHabit , onAdd}){
    return(
        <div>
            <input 
                type = "text"
                placeholder="Enter a new habit"
                value={newHabit}
                onChange={(e)=> CreateNewHabit(e.target.value)}
                />
            <button onClick={onAdd}>Add</button>
        </div>
    )
}
export default AddHabit