import { SwipeableDrawer, Typography } from "@material-ui/core";
import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = ({ menu, setMenu }) => {
  return (
    <SwipeableDrawer
      open={menu}
      anchor="left"
      onClose={() => setMenu(false)}
      onOpen={() => setMenu(true)}
      className="menu"
    >
      <Typography>Search by...</Typography>

      <ul>
        <li>
          <Typography
            component={Link}
            to="/searchcountry"
            style={{ textDecoration: "none" }}
            color="textPrimary"
            onClick={() => setMenu(false)}
          >
            Country
          </Typography>
        </li>
        <li>
          <Typography
            component={Link}
            to="/searchregion"
            style={{ textDecoration: "none" }}
            color="textPrimary"
            onClick={() => setMenu(false)}
          >
            Region
          </Typography>
        </li>
      </ul>
    </SwipeableDrawer>
  );
};

export default Menu;
