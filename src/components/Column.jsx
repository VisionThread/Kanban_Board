import React from "react";
import { useDrop } from "react-dnd";
import { useContext } from "react";
import KanbanContext from "../context/KanbanContext";
import Task from "./Task";

const Column = ({ status, title }) => {
  const { tasks, moveTask, addTask } = useContext(KanbanContext);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => {
      moveTask(item.id, status);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="inline-flex flex-col w-[200px] min-h-[350px] p-3 rounded-2xl shadow-md  mx-3"
      style={{
        background: isOver ? "#E0F2FE " : "#f8f8f8",
      }}
    >
      <h3 className="text-3xl font-extrabold text-blue-300">{title}</h3>
      {tasks
        .filter((t) => t.status === status)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
    </div>
  );
};

export default Column;
