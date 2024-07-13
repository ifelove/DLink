// store.js
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/app/appSlice";
import boardSlice from "./features/board/boardSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    board: boardSlice,
  },
});

export default store;
