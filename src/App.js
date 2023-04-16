import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/frontend/Home/Home";
import Master from "./layouts/frontend/Master";
import Login from "./components/frontend/auth/Login/index";
import Register from "./components/frontend/auth/Register/index";
import Page404 from "./layouts/error/Page404";

// admin
import AdminRoute from "./protectedRoute/AdminRoute";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import Product from "./components/admin/Product";
import Category from "./components/admin/Category";
import Brand from "./components/admin/Brand";

// user
import UserRoute from "./protectedRoute/UserRoute";
import User from "./components/User/User";
import UserEdit from "./components/User/User/Edit";
import UserProductList from "./components/User/Product/UserProductList";
import AddProduct from "./components/User/Product/AddProduct";

// home
import ProductList from "./components/frontend/Product/ProductList";
import ProductDetail from "./components/frontend/Product/ProductDetail";
import ProductByCategory from "./components/frontend/Home/ProductByCategory";
import ProductByBrand from "./components/frontend/Home/ProductByBrand";
import ProductByFeatured from "./components/frontend/Home/ProductByFeatured/List";
import ProductBySale from "./components/frontend/Home/ProductBySale";
import ProductBySearch from "./components/frontend/Home/ProductBySearch";
import Cart from "./components/frontend/Cart";

import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_ROOT_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="" element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="product/category/:id" element={<ProductByCategory />} />
          <Route path="product/brand/:id" element={<ProductByBrand />} />
          <Route path="product/featured" element={<ProductByFeatured />} />
          <Route path="product/sale" element={<ProductBySale />} />
          <Route path="product/search" element={<ProductBySearch />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<UserRoute />}>
            <Route path="profile/info" element={<User />} /> 
            <Route path="profile/edit" element={<UserEdit />} />
            <Route path="profile/add-product" element={<AddProduct />} />
            <Route path="profile/list-product" element={<UserProductList />} />
          </Route>
        </Route>

        <Route path="/admin/" element={<AdminRoute />}>
          <Route path="" element={<Navigate replace to="/admin/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="product" element={<Product />} />
          <Route path="category" element={<Category />} />
          <Route path="brand" element={<Brand />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
