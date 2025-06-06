import React, { createContext, useState } from "react";

const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const moveTask = (id, newStatus) => {
    setTasks(
        (prevTasks)=> prevTasks.map((task) =>
            task.id === id ? { ...task, status: newStatus } : task)
    );
  };

  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim()) {
      const newTaskobject = {
        id: tasks.length + 1,
        title: newTask,
        status: "todo",
      };
      setTasks([...tasks, newTaskobject]);
      setNewTask("");
    }
  };

  return (
    <KanbanContext.Provider value={{ tasks, moveTask , addTask ,newTask, setNewTask}}>
      {children}
    </KanbanContext.Provider>
  );
};

export default KanbanContext;
