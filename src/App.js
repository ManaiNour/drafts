import logo from "./logo.svg";
import "./App.css";
import Navigator from "./components/Navigator";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ContextProducts from "./context/ContextProducts";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Card from "./pages/Card";
import Order from "./pages/Order";
import MyOrders from "./pages/MyOrders";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Navigator />

      <ContextProducts>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/card" element={<Card />} />
            <Route path="/order" element={<Order />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Route>
        </Routes>
      </ContextProducts>
    </div>
  );
}

export default App;