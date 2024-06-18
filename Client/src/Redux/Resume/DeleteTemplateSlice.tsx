import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInterceptor from '../../utils/interceptor.js';
import { DELETE_TEMPLATE_BY_ID } from '../../utils/constants.js';
import { IDeleteTemplateInitialState, IDeleteTemplatePayload } from './types.js';

const initialState: IDeleteTemplateInitialState = {
    loading: false,
    deleteTemplate: {},
    error: ""
};

export const deleteTemplateByIdApi : any = createAsyncThunk("delete-template", (id:IDeleteTemplatePayload) => {
    return axiosInterceptor.delete(`${DELETE_TEMPLATE_BY_ID}/${id}`).then((response) => {
        return response?.status === 200 && response?.data
    }).catch((error) => {
        return error
    })
});

export const deleteTemplateSlice = createSlice({
    name: "delete-template",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteTemplateByIdApi.pending, (state: any) => {
            state.loading = true;
        });
        builder.addCase(deleteTemplateByIdApi.fulfilled, (state: any, action: any) => {
            state.loading = false;
            state.deleteTemplate = action.payload;

        });
        builder.addCase(deleteTemplateByIdApi.rejected, (state: any, action: any) => {
            state.loading = false;
            state.error = action.payload;

        });
    }
});

export default deleteTemplateSlice.reducer;