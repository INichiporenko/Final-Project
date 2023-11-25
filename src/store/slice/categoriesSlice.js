
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

// КАТАЛОГ
export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetch('http://localhost:3333/categories/all')
        const data = await response.json();
        return data 
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
        reducers: {
        LOAD (state, {payload}){
            state.list = payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCategories.fulfilled, (state, {payload}) => {
                state.status = 'ready';
                state.list = payload;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = 'error'
            })
    }
})


export const {LOAD} = categoriesSlice.actions
export default categoriesSlice.reducer;