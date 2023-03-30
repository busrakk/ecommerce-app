import { createSlice } from "@reduxjs/toolkit";
import { getProductByUser } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
    userProducts: [],
    userProductsStatus: STATUS.IDLE,
    addUserProducts: [],
    addUserProductsStatus: STATUS.IDLE,
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
        // add product
        // .addCase(addProductByUser.pending, (state, action) => {
        //     state.addUserProductsStatus = STATUS.LOADING;
        // })
        // .addCase(addProductByUser.fulfilled, (state, action) => {
        //     state.addUserProducts.push(action.payload);
        //     state.addUserProductsStatus = STATUS.SUCCEEDED;
        // })
        // .addCase(addProductByUser.rejected, (state, action) => {
        //     state.addUserProductsStatus = STATUS.FAILED;
        // })
    }
})

export const getUserProducts = (state) => state.userproduct.userProducts;
export const getUserProductsStatus = (state) => state.userproduct.userProductsStatus;
export const getAddUserProducts = (state) => state.userproduct.addUserProducts;
export const getAddUserProductsStatus = (state) => state.userproduct.addUserProductsStatus;
export default userproductSlice.reducer;