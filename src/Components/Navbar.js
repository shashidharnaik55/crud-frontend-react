import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#000000",
  },
  tabs: {
    color: "#fff",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20,
  },
});

const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink to="./" exact className={classes.tabs}>
          CRUD
        </NavLink>
        <NavLink to="./all" className={classes.tabs}>
          All Users
        </NavLink>
        <NavLink to="./add" className={classes.tabs}>
          Add Users
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
