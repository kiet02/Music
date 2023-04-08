import { createSlice } from "@reduxjs/toolkit";

export const track = createSlice({
    name:'track',
    initialState:{
        number:0,
        LIST:[],
        Song:[],
    },
    reducers:{
        update:(state,action)=>{
            state.number = action.payload
        },
        pust:(state,action)=>{
            state.LIST = action.payload;
        },
        songplay:(state,action)=>{
            state.Song = action.payload;
        }
    }
})

export const {update,pust,songplay} = track.actions;
export default track.reducer;