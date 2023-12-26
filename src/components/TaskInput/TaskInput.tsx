import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import "./TaskInput.css";
import { addTask } from "../../redux/taskSlice";

const TaskInput: React.FC = (): JSX.Element => {
  const [task, setTask] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = task;

    dispatch(addTask(newTask));

    setTask("");
  };

  return (
    <div>
      <form className="task_container" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTask(e.target.value);
          }}
        />
        <button className="AddBtn">Add task</button>
      </form>
    </div>
  );
};

export default TaskInput;
