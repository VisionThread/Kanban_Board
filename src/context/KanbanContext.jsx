import React, { createContext, useState } from "react";

const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    // { id: 1, title: "Task 1", status: "todo" },
    // { id: 2, title: "Task 2", status: "todo" },
    // { id: 3, title: "Task 3", status: "inProgress" },
    // { id: 4, title: "Task 4", status: "inProgress" },
    // { id: 5, title: "Task 5", status: "done" },
  ]);

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
