import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  tasks: { id: number; text: string; completed: boolean }[];
}

const initialState: State = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask = {
        id: state.tasks.length + 1,
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },
  },
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
