import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const sortedTasks = [...tasks].sort((a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  );

  return (
    <div className="task">
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
