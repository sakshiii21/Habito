import { useState, useEffect } from "react";
import AddHabit from "./components/AddHabit.jsx";
import HabitList from "./components/HabitList.jsx";

function App() {
  const [newHabit, CreateNewHabit] = useState("");
  const [Habits, ChangeHabits] = useState([]);

  useEffect(() => {
    fetchHabits();
  }, []);

  function fetchHabits() {
    fetch("http://localhost:5000/habits")
      .then((res) => res.json())
      .then((data) => ChangeHabits(data));
  }

  function AddnewHabit() {
    if (!newHabit) return;

    fetch("http://localhost:5000/habits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskName: newHabit,
        taskCompleted: false,
      }),
    }).then(() => fetchHabits());

    CreateNewHabit("");
  }

  function DeleteThisHabit(id) {
    fetch(`http://localhost:5000/habits/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchHabits());
  }

  function ToggleHabit(id) {
    fetch(`http://localhost:5000/habits/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchHabits());
  }

  return (
    <div className="min-h-screen flex justify-center bg-[#0f0f14]">
      <div className="w-full max-w-md px-5 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            HABITO
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Your daily habit tracker!!
          </p>
        </div>

        <AddHabit
          newHabit={newHabit}
          CreateNewHabit={CreateNewHabit}
          onAdd={AddnewHabit}
        />

        <HabitList
          habits={Habits}
          onDelete={DeleteThisHabit}
          ToggleHabit={ToggleHabit}
        />
      </div>
    </div>
  );
}

export default App;