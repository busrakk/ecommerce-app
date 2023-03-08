import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/frontend/Home";
import Master from "./layouts/frontend/Master";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import ProductDetail from "./components/Product/ProductDetail";
import AdminRoute from './protectedRoute/AdminRoute';
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import Page404 from './layouts/error/Page404';
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="" element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* <Route path="users" element={<UserLayout />}>
          <Route index={true} element={<Users />} />
          <Route path=":id" element={<User />} />
        </Route> */}
        <Route path='/admin/' element={<AdminRoute/>} >
            <Route
              path=""
              element={<Navigate replace to="/admin/dashboard" />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
