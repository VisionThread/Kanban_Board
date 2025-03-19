import React from "react";
import { useDrag } from "react-dnd";

const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  return (
    <div>
      <div
        ref={drag}
        className="p-2 m-1.5 rounded shadow-md bg-amber-300"
        style={{
          padding: "10px",
          margin: "5px",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        {task.title}
      </div>
    </div>
  );
};

export default Task;
