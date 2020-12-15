import React, { useState } from "react";
import { Typography, IconButton, Toolbar } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Toolbar position="static">
      <IconButton edge="start" onClick={() => setMenu(!menu)}>
        <MenuIcon />
      </IconButton>
      <Menu menu={menu} setMenu={setMenu} />
      <Typography
        variant="h6"
        component={Link}
        to="/"
        style={{ textDecoration: "none" }}
        color="textPrimary"
      >
        Rest Countries Project {<PublicIcon style={{ fontSize: 18 }} />}
      </Typography>
    </Toolbar>
  );
};

export default Header;

/*
<Grid item xs={12}>
      <Typography align="left" variant="h3" color="textPrimary">
        Rest Countries Project {<PublicIcon style={{ fontSize: 40 }} />}
      </Typography>
    </Grid>
*/
