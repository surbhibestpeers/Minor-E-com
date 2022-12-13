import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const isLogin = localStorage.getItem("userrecord");
    console.log("Is User Login?", isLogin);
    return (
        isLogin ? children : 
        <div>
        <Navigate to="/" />
        </div>
    );
}
export default ProtectedRoute;