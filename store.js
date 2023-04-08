import { configureStore } from "@reduxjs/toolkit";
import  track  from "./Slide";

export default configureStore({
    reducer:{
        track:track
    }
})