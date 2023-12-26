import React from "react";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
