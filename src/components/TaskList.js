import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

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

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPintask: PropTypes.func,
  onArchiveTask: PropTypes.func,
};

TaskList.defaultProps = {
  loading: false,
};
