import React from "react";
import { useAuth } from "../context";
import { Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default  function PrivateRoute({ children }) {
  
  let auth = useAuth();
  let location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

export function Privateroute2({children}){
  let auth = useAuth();
  let location = useLocation();
  if (!auth.user) {
    return <Navigate to="/Login" state={{ from: location }} />;
  }
  return children
}
export function Privateroute3({children}){
  let auth = useAuth();
  let location = useLocation();
  if (!auth.user) {
    return <Navigate to="/Login" state={{ from: location }} />;
  }
  return children
}