import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:4001/api/site/boards";
//const url= "/api/site/boards/";
import axios from "axios";

const initialState = {
  isLoading: false,
  searchedBoards: [],
  singleBoard:{}
};

export const searchBoards = createAsyncThunk(
  "board/searchBoards",
  async (id) => {
    return axios
      .get(`${url}?search=${id}`)
      .then((response) => response.data.boards)
      .catch((error) => console.log(error));
  }
);

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setSingleBoard: (state, action) => {
      state.singleBoard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBoards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchedBoards = action.payload;
      })
      .addCase(searchBoards.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setSingleBoard } = boardSlice.actions;

export default boardSlice.reducer;
