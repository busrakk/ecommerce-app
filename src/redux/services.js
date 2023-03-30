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

export const getProductSingle = createAsyncThunk("product/getproduct", async (id) => {
  const res = await axios(`/api/product/${id}`);
  return res.data.data;
})

export const productByCategory = createAsyncThunk("categoryProduct/getCategoryProduct", async(id) => {
  const res = await axios(`/api/product/category/${id}`);
  return res.data.data;
})

export const productByBrand = createAsyncThunk("brandProduct/getBrandProduct", async(id) => {
  const res = await axios(`/api/product/brand/${id}`);
  return res.data.data;
})

export const getProductFeatured = createAsyncThunk("productFeatured/getproductFeatured", async () => {
  const res = await axios("/api/featured");
  return res.data.data;
})

export const getProductByUser = createAsyncThunk("productByUser/getproductByUser", async () => {
  const res = await axios("/api/product-user");
  return res.data.data;
})