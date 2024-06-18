import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInterceptor from '../../utils/interceptor.js';
import { FETCH_ALL_TEMPLATE } from '../../utils/constants.js';
export const initialState : any = {
    loading: false,
    data: [],
    error: ""
};

export const fetchAllTemplate : any = createAsyncThunk("fetch-template", () => {
    const url = FETCH_ALL_TEMPLATE;
    return axiosInterceptor.get(url).then((response) => {
        if (response?.status === 200) {
            return response.data;
        }
    }).catch((error) => {
        return error
    })
});

export const getAllTemplateSlice = createSlice({
    name: "fetch-template",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllTemplate.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAllTemplate.fulfilled, (state: any, action: any) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchAllTemplate.rejected, (state: any, action: any) => {
            state.loading = false;
            state.error = action.error
        });
    }
});

// export const userLoading = (state) => state?.users?.loading;
// export const usersData = (state: IState) => state?.users?.userData;
export default getAllTemplateSlice.reducer; 