import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuListItems from "../pures/MenuListItems";

const Layout = () => {
  const { user, signout } = useContext(AppContext);
  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/login");
  };

  const handleSignout = () => {
    signout(() => navigate("/"));
  };

  return (
    <div>
      <nav>
        <MenuListItems />
        <Button
          onClick={user ? handleSignout : redirectLogin}
          variant="contained"
        >
          {user ? "Logout" : "Login"}
        </Button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
