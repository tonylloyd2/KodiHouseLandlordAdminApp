import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import bCategoryService from "./blogCategoryService";


   export const getBlogCategory = createAsyncThunk(
    "blogCategory/get-blog-categories",
    async (thunkAPI)=>{
        try {
            return await bCategoryService.getBlogCategory();
        } catch (error) {
            return thunkAPI.rejectwithValue(error);
            
        }
    }
);

const initialState={
    bCategories:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
};

export const blogCategorySlice = createSlice({
    name:"bCategories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getBlogCategory.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getBlogCategory.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.bCategories=action.payload;
        })
        .addCase(getBlogCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;

        })

    }
})

 export default blogCategorySlice.reducer;




