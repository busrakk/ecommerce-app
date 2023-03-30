import { createSlice } from "@reduxjs/toolkit";
import { getProductByUser } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
    userProducts: [],
    userProductsStatus: STATUS.IDLE,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        builder
        .addCase(getProductByUser.pending, (state, action) => {
            state.userProductsStatus = STATUS.LOADING;
        })
        .addCase(getProductByUser.fulfilled, (state, action) => {
            state.userProducts = action.payload;
            state.userProductsStatus = STATUS.SUCCEEDED;
        })
        .addCase(getProductByUser.rejected, (state, action) => {
            state.userProductsStatus = STATUS.FAILED;
        })
    }
})

export const getUserProducts = (state) => state.user.userProducts;
export const getUserProductsStatus = (state) => state.user.userProductsStatus;
export default userSlice.reducer;