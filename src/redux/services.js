import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBrands = createAsyncThunk("brands/getbrands", async () => {
  const res = await axios.post("/api/allbrand");
  return res.data.data;
});

export const getCategories = createAsyncThunk("categories/getcategories", async () => {
  const res = await axios.post("/api/allcategory");
  return res.data.data;
});

export const getProducts = createAsyncThunk("products/getproducts", async () => {
  const res = await axios.post("/api/allproduct");
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

export const getProductFeaturedAsync = createAsyncThunk("productFeatured/getproductFeatured", async () => {
  const res = await axios("/api/featured");
  return res.data.data;
})

export const getProductSaleAsync = createAsyncThunk("productSale/getproductSale", async () => {
  const res = await axios("/api/sell-product");
  return res.data.data;
})

export const getProductSearchAsync = createAsyncThunk("productSearch/getproductSearch", async () => {
  const res = await axios("/api/search-product");
  return res.data.data;
})

// user

export const getUserAsync = createAsyncThunk("user/getUser", async () => {
  const res = await axios("/api/user");
  return res.data.data;
})

export const getProductByUser = createAsyncThunk("productByUser/getproductByUser", async () => {
  const res = await axios.post("/api/product-user-list");
  return res.data.data;
})

export const addProductByUser = createAsyncThunk("productByUser/getproductByUser", async () => {
  const res = await axios("/api/product-save");
  return res.data.data;
})
