import { Routes, Route } from "react-router-dom";
import Home from "./components/frontend/Home";
import Master from "./layouts/frontend/Master";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import ProductDetail from "./components/Product/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="" element={<Home />} />
          <Route path="product/:product_id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* <Route path="users" element={<UserLayout />}>
          <Route index={true} element={<Users />} />
          <Route path=":id" element={<User />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
