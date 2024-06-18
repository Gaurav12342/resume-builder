import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInterceptor from '../../utils/interceptor';
import { CREATE_TEMPLATE } from '../../utils/constants';
import { ICreateTemplateInitialState, ICreateTemplatePayloadObject } from './types';


export const initialState : ICreateTemplateInitialState = {
    loading: false,
    createTemplateData: {},
    error: ""
};

export const createTemplateAPI :any = createAsyncThunk("create-template", (obj:ICreateTemplatePayloadObject) => {
    return axiosInterceptor.post(CREATE_TEMPLATE, obj).then((response) => {
        return response?.status === 201 && response?.data
    }).catch((error) => {
        return error;
    });
});

export const createTemplateSlice = createSlice({
    name: "create-template",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createTemplateAPI.pending, (state:any) => {
            state.loading = true;
        });
        builder.addCase(createTemplateAPI.fulfilled, (state:any, action:any) => {
            state.loading = false;
            state.createTemplateData = action.payload
        });
        builder.addCase(createTemplateAPI.rejected, (state:any, action:any) => {
            state.loading = false;
            state.error = action.error;
        });
    }
});

export default createTemplateSlice.reducer;