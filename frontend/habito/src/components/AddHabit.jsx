import React from "react";

function AddHabit({ newHabit, CreateNewHabit, onAdd }) {
  return (
    <div className="mb-6">
      <div className="flex gap-3 p-2 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
        <input
          type="text"
          placeholder="New habit..."
          value={newHabit}
          onChange={(e) => CreateNewHabit(e.target.value)}
          className="
            flex-1 px-4 py-3 rounded-xl
            bg-transparent text-white
            placeholder-gray-500
            outline-none
          "
        />

        <button
          onClick={onAdd}
          className="
            px-5 py-3 rounded-xl
            bg-violet-500 text-white font-medium
            shadow-lg shadow-violet-500/30
            hover:shadow-violet-500/50
            active:scale-95
            transition-all duration-150
          "
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddHabit;