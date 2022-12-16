import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      AuthLayout
      <hr />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
