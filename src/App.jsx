import { useContext, useEffect } from "react";
import { tokenContext } from "./context/tokenContext/TokenContext";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
export const App = () => {
  const navigate = useNavigate();
  const { token } = useContext(tokenContext);
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
