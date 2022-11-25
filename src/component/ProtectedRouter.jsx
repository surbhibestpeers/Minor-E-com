import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const isLogin = localStorage.getItem("token");
    console.log("Is User Login?", isLogin);
    return (
        isLogin ? children : 
        <div>
        <Navigate to="/signin" />
        </div>
    );
}
export default ProtectedRoute;