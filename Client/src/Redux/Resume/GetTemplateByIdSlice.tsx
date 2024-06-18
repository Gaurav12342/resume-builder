import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInterceptor from '../../utils/interceptor.js';
import { FETCH_ALL_TEMPLATE } from '../../utils/constants.js';
import { IFetchByIdTemplateInitialState, IFetchByIdTemplatePayload } from './types.js';
export const initialState:IFetchByIdTemplateInitialState = {
    loading: false,
    data: {},
    error: ""
};

export const fetchTemplateById : any = createAsyncThunk("fetch-template-by-id", (id:IFetchByIdTemplatePayload) => {
    const url = `${FETCH_ALL_TEMPLATE}/${id}`;
    return axiosInterceptor.get(url).then((response) => {
        if (response?.status === 200) {
            return response.data;
        }
    }).catch((error) => {
        return error
    })
});

export const getATemplateByIdSlice = createSlice({
    name: "fetch-template-by-id",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTemplateById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTemplateById.fulfilled, (state: any, action: any) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTemplateById.rejected, (state: any, action: any) => {
            state.loading = false;
            state.error = action.error
        });
    }
});

// export const userLoading = (state) => state?.users?.loading;
// export const usersData = (state: IState) => state?.users?.userData;
export default getATemplateByIdSlice.reducer; 