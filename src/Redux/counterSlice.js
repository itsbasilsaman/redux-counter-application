import { createSlice } from "@reduxjs/toolkit";




export const counterSlice = createSlice({
  name:'counter',
  initialState:{
    value:0
  },
  // action
  reducers:{
    increment : (state)=> {
      state.value+=1
    },
    decrement : (state)=> {
      state.value-=1
    },
    reset : (state)=> {
      state.value=0
    },
    changeRange: (state, action)=> {
      state.value += action.payload
    }
  }
})
// actions are needed for components
export const {increment,decrement,reset,changeRange} = counterSlice.actions
// reducer are needed for store to update
export default counterSlice.reducer