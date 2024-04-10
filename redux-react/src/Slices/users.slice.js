import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "jquery";
const initialValue = {
    isloading: false,
    data: [],
    error: null,
}
export const fetchAllusers = createAsyncThunk('users/all', ()=> {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error =>{
        return error;
    })
});


const usersSlice = createSlice({
    name:'users',
    initialState:initialValue,
    reducers:{

    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchAllusers.pending, (state) =>{
            state.isloading =  true;
        })
        .addCase(fetchAllusers.fulfilled, (state, action)=>{
            state.isloading = false;
            state.data= action.payload;
        })
        .addCase(fetchAllusers.rejected, (state, action) =>{
          state.isloading = false;
          state.error = action.payload; 
        })
    }
});
export default usersSlice.reducer;
