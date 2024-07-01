import { createSlice } from "@reduxjs/toolkit";
import dash from "../../../../assets/dash.png";

const initialState = {
  theme: "light",
  subSidebarData: {
    title: "dashboard",
    icon: dash,
    links: [
      { name: "overwiew", url: "" },
      { name: "team management", url: "" },
    ],
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "cupcake" ? "dark" : "cupcake";
    },
    setSubSidebarData:(state,action)=>{

state.subSidebarData=action.payload

    }
  },
});

export const { toggleTheme,setSubSidebarData } = appSlice.actions;

export default appSlice.reducer;
