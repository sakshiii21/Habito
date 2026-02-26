import React from "react";

function HabitItem({ id, text, doneToday, onDelete, ToggleHabit }) {
  return (
    <div
      className={`
        flex items-center justify-between
        px-4 py-3 rounded-2xl
        backdrop-blur-lg border
        transition-all duration-200
        ${doneToday
          ? "bg-violet-500/10 border-violet-500/30 shadow-lg shadow-violet-500/20"
          : "bg-white/5 border-white/10"}
      `}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => ToggleHabit(id)}
          className={`
            w-10 h-10 rounded-xl flex items-center justify-center
            text-sm font-bold
            transition-all duration-150 active:scale-90
            ${doneToday
              ? "bg-violet-500 text-white shadow-lg shadow-violet-500/40"
              : "bg-white/10 text-gray-400"}
          `}
        >
          {doneToday ? "✓" : "•"}
        </button>

        <p
          className={`
            text-sm
            ${doneToday
              ? "text-violet-300 line-through"
              : "text-gray-200"}
          `}
        >
          {text}
        </p>
      </div>

      <button
        onClick={() => onDelete(id)}
        className="
          text-xs px-3 py-1.5 rounded-lg
          bg-red-500/10 text-red-400
          hover:bg-red-500/20
          transition-all duration-150
        "
      >
        delete
      </button>
    </div>
  );
}

export default HabitItem;