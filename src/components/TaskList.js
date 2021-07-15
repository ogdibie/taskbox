import React from "react";
import Task from "./Task";

export default function TaskList({ loading, tasks, onPintask, onArchiveTask }) {
  const events = {
    onPintask,
    onArchiveTask,
  };

  if (loading) return <div className="list-items">Loading</div>;

  if (tasks.length === 0) return <div className="list-items">empty</div>;
  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}
