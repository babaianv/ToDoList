import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../../redux/taskSlice";
import trashIcon from "../../image/trash.svg";
import "./TaskItem.css";

interface TaskItemProps {
  task: { id: number; text: string; completed: boolean };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }): JSX.Element => {
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div className={`tasks_container ${task.completed ? "completed" : ""}`}>
      <p className={`item_text ${task.completed ? "completed" : ""}`}>
        {task.text}
      </p>
      <button className="btn" onClick={() => dispatch(deleteTask(task.id))}>
        <img className="trashIcon" src={trashIcon} alt="trashIcon" />
      </button>
      <input
        className="checkbox"
        onChange={handleCompleted}
        type="checkbox"
        checked={task.completed}
      />
    </div>
  );
};

export default TaskItem;
