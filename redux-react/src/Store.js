import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './Slices/users.slice';
import tutorialsReducer from './Slices/tutorials.slice';
export const store = configureStore({
    reducer:{
        users:usersReducer,
        tutorialsInfo:tutorialsReducer,
    }
});