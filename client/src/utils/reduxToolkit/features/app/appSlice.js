import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  subSidebarData: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setSubSidebarData:(state,action)=>{

state.subSidebarData=action.payload

    }
  },
});

export const { toggleTheme,setSubSidebarData } = appSlice.actions;

export default appSlice.reducer;
