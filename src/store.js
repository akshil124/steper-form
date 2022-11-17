import {configureStore} from "@reduxjs/toolkit";
import stepcounter from "./raducer/steper-count"
export const store = configureStore({
    reducer:{stepcounter}
})
