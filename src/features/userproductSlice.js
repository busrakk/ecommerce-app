import { createSlice } from "@reduxjs/toolkit";
import { getProductByUser } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
    userProducts: [],
    userProductsStatus: STATUS.IDLE,
}

const userproductSlice = createSlice({
    name: 'userproduct',
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        builder
        // get product
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

export const getUserProducts = (state) => state.userproduct.userProducts;
export const getUserProductsStatus = (state) => state.userproduct.userProductsStatus;

export default userproductSlice.reducer;