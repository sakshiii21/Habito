import React from "react";
import HabitItem from "./HabitItem.jsx";

function HabitList({ habits, onDelete, ToggleHabit }) {
  if (habits.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-white text-lg">Nothing yet 🌙</p>
        <p className="text-gray-500 text-sm mt-1">
          Add your first habit.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem
          key={habit._id}
          id={habit._id}
          text={habit.taskName}
          doneToday={habit.taskCompleted}
          onDelete={onDelete}
          ToggleHabit={ToggleHabit}
        />
      ))}
    </div>
  );
}

export default HabitList;