import { createSlice } from "@reduxjs/toolkit";

 

const initialState = {

  islogeedin: false,

  jwt: "",

  role: "",

};

const loginslice = createSlice({

  name: "auth",

  initialState,

  reducers: {},

});

 

export default loginslice.reducer;

export const {} = loginslice.actions;