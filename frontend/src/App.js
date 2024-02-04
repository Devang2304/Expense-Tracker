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
        <Route
          path="/register"
          element={
            <ProtectedRoutes>
              <Register />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoutes>
              <Login />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export function ProtectedRoutes(props) {
  const userName = localStorage.getItem("userName");
  if (userName) {
    return props.children;
  } else {
    if (window.location.pathname !== "/login") {
      return <Navigate to="/login" />;
    } else {
      return props.children;
    }
  }
}

export default App;
