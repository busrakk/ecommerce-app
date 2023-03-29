import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBrands = createAsyncThunk("brands/getbrands", async () => {
  const res = await axios("/api/allbrand");
  return res.data.data;
});

export const getCategories = createAsyncThunk("categories/getcategories", async () => {
  const res = await axios("/api/allcategory");
  return res.data.data;
});

export const getProducts = createAsyncThunk("products/getproducts", async () => {
  const res = await axios("/api/allproduct");
  return res.data.data;
});
