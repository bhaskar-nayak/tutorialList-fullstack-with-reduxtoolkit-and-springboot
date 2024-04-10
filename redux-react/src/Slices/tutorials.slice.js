import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialValue = {
    isloading: false,
    isTutorialAdded:false,
    isTutorialUpdated:false,
    isTutorialDeleted:false,
    data: [],
    error: null,
};
export const fetchAllTutorials = createAsyncThunk('getAlltutorials', () =>{
    return axios.get('http://localhost:9091/myapps/listcourse').then(response => {
        console.log(response.data);
        return response.data;
    })
});
//we need to invoke this func i add-tutorial
export const AddTutorial = createAsyncThunk('addtutorial', (payload) =>{
    return axios.post('http://localhost:9091/myapps/addcourse', payload).then(response => {
        console.log(response.data);
        return response.data;
    })
});
export const updateTutorial = createAsyncThunk('updatetutorial', (payload) =>{
    return axios.put('http://localhost:9091/myapps/update', payload).then(response => {
        console.log(response.data);
        return response.data;
    })
});
export const deleteTutorial =createAsyncThunk('deleteTutorial', (payload) =>{
    return axios.delete(`http://localhost:9091/myapps/delete/${payload.id}`).then(response =>{
        return response.data;
    })
})
export const tutorialsSlice = createSlice({
    name: 'tutorialsSlice',
    initialState: initialValue,
    //after adding data in addTutorial alert message not disappear because of 
    //value was true to overcome that situation we use reducers
    reducers:{
        resetAddedTutorialFlag: (state, action)=>{//this reducer invoke in addtutorial 
            state.isTutorialAdded = false;
            state.isTutorialUpdated = false;
            state.isTutorialDeleted = false;
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchAllTutorials.pending, (state) =>{
            state.isloading = true;
        })
        .addCase(fetchAllTutorials.fulfilled, (state, action) =>{
            console.log(action);
            state.isloading = false;
            state.data = action.payload;
            // state.tutorials = action.payload.data;
        })
        .addCase(fetchAllTutorials.rejected, (state, action) =>{
            state.isloading = false;
            state.data= action.payload;
        })
        .addCase(AddTutorial.pending, (state) =>{
            state.isTutorialAdded = false;
            //this state used for multiple api cals
            //adding multiple tutorials that value become true so we won't able to see the state changes
            //thats why adding is tutorial false
            state.isloading = true;
        })
        .addCase(AddTutorial.fulfilled, (state, action) => {
            console.log(action);
            state.isloading =false;
            // state.isTutorialAdded = true;
            //to maintain just need to identify whether tutorial added or not 
        })
        .addCase(AddTutorial.rejected, (state, action) =>{
            state.isloading=false;
            state.error = action.payload;
        })
        //adding interception for update functionality
        .addCase(updateTutorial.pending, (state) =>{
            state.isTutorialUpdated = false;
            //this state used for multiple api cals
            //adding multiple tutorials that value become true so we won't able to see the state changes
            //thats why adding is tutorial false
            state.isloading = true;
        })
        .addCase(updateTutorial.fulfilled, (state, action) => {
            console.log(action);
            state.isloading =false;
            state.isTutorialUpdated = true;
            //to maintain just need to identify whether tutorial added or not 
        })
        .addCase(updateTutorial.rejected, (state, action) =>{
            state.isloading=false;
            state.error = action.payload;
        })
        //this interception for delete functionality
        .addCase(deleteTutorial.pending, (state) =>{
            state.isTutorialDeleted = false;
            state.isloading = true;
        })
        .addCase(deleteTutorial.fulfilled, (state, action) =>{
            console.log(action);
            state.isloading =false;
            state.isTutorialDeleted = true;
        })
        .addCase(deleteTutorial.rejected, (state, action) =>{
            state.isloading = false;
            state.error = action.payload;
        })
    }
});

export const { resetAddedTutorialFlag } =tutorialsSlice.actions
export default tutorialsSlice.reducer;