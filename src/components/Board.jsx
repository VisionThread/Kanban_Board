import React from "react";
import Column from "./Column";
import KanbanContext from "../context/KanbanContext";
import { useContext } from "react";

function Board() {
  const { addTask, newTask, setNewTask } = useContext(KanbanContext);

  const handleAddTask = () => {
    addTask();
  };
  return (
    <div className="flex-col items-center gap-4 p-4">
      <h3 className="text-5xl font-bold  bg-gradient-to-r from-purple-300 to-yellow-300 text-black p-3 rounded-lg shadow-lg my-7">
        Kanban Board
      </h3>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="bg-white mx-3 my-5 p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 shadow-sm"
          placeholder="Enter a new task..."
        />
        <button
          onClick={handleAddTask}
          className=' className="px-4 py-2 bg-zinc-200 text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition-all"'
        >
          Add Task
        </button>
      </div>
      <Column title="To Do" status="todo" />
      <Column title="In Progress" status="inProgress" />
      <Column title="Done" status="done" />
    </div>
  );
}

export default Board;
