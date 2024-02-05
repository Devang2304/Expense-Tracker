import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export function ProtectedRoutes(props) {
  const userName = localStorage.getItem("userName");
  const isLoginPage = window.location.pathname === "/login";

  if (userName) {
    return props.children;
  } else {
    if (!isLoginPage) {
      return <Navigate to="/login" />;
    } else {
      return props.children;
    }
  }
}

export default App;
