import { useState } from 'react'
import AddHabit from './components/AddHabit.jsx'
import HabitList from './components/HabitList.jsx'

function App() {
  const [newHabit,CreateNewHabit] = useState("");
  const [Habits, ChangeHabits] = useState([]);

  function AddnewHabit(){
    if(!newHabit) return;
    
    const currNewHabit = {
      id: Date.now(),
      text: newHabit,
      doneToday: false
    }
    ChangeHabits(prev => [...prev,currNewHabit])
    CreateNewHabit("")
  }

  function DeleteThisHabit(id){
    ChangeHabits(prev=>prev.filter(habit => habit.id !== id))
  }

  function ToggleHabit(id){
    ChangeHabits(prev=>prev.map(habit => habit.id===id ? {...habit,doneToday: !habit.doneToday} : habit))
  }


  return (
    <>
    <div>
      <h1>Habito</h1>
      <AddHabit habit={newHabit} CreateNewHabit={CreateNewHabit} onAdd={AddnewHabit} />
      <HabitList habits={Habits} onDelete={DeleteThisHabit} ToggleHabit={ToggleHabit} />
      
    </div>
    </>
  )
}

export default App

