import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../redux/services";
import { STATUS } from "../utils/status";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: STATUS.IDLE
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getCategories.pending, (state, action) => {
      state.categoriesStatus = STATUS.LOADING;
    })
    .addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.categoriesStatus = STATUS.SUCCEEDED;
    })
    .addCase(getCategories.rejected, (state, action) => {
      state.categoriesStatus = STATUS.FAILED;
    })
  }
})

export const getAllCategories = (state) => state.category.categories;
export default categorySlice.reducer;
