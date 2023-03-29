import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
  brands: [],
  brandsStatus: STATUS.IDLE
}

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getBrands.pending, (state, action) => {
      state.brandsStatus = STATUS.LOADING;
    })
    .addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.brandsStatus = STATUS.SUCCEEDED;
    })
    .addCase(getBrands.rejected, (state, action) => {
      state.brandsStatus = STATUS.FAILED;
    })
  }
})

export const getAllBrands = (state) => state.brand.brands;
export default brandSlice.reducer;
