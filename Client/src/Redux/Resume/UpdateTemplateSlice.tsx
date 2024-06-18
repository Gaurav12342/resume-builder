import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInterceptor from '../../utils/interceptor';
import { UPDATE_TEMPLATE } from '../../utils/constants';

export const initialState : any = {
    loading: false,
    updateTemplateData: {},
    error: ""
};

export const updateTemplateAPI : any = createAsyncThunk("update-template", (obj:any) => {
    const url = `${UPDATE_TEMPLATE}/${obj?._id}`
    return axiosInterceptor.put(url, obj).then((response) => {
        return response?.status === 200 && response?.data
    }).catch((error) => {
        return error;
    });
});
export const updateTemplateSlice = createSlice({
    name: "update-template",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateTemplateAPI.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateTemplateAPI.fulfilled, (state: any, action: any) => {
            state.loading = false;
            state.updateTemplateData = action.payload
        });
        builder.addCase(updateTemplateAPI.rejected, (state: any, action: any) => {
            state.loading = false;
            state.error = action.error;
        });
    }
});

export default updateTemplateSlice.reducer;