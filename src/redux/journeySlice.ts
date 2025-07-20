import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JourneyState {
  todos: string[];
}

const initialState: JourneyState = {
  todos: [],
};

const journeySlice = createSlice({
  name: "journey",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.unshift(action.payload);
    },
  },
});

export const { addTodo } = journeySlice.actions;
export default journeySlice.reducer;
