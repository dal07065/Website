import { AppBar, IconButton, Toolbar } from "@mui/material";
import { House } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "../stylesheets/Navbar.css"

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#595959",
};

export function Navbar() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ background: "#ffffff" }}>
        <Link to="/">
          <IconButton className="homebutton"
            size="large"
            edge="start"
            aria-label="logo"
          >
            <House />
          </IconButton>
        </Link>
        <Link to="/about" className="aboutme">
          l i n a ∙ k a n g
        </Link>
        <Link to="/portfolio" className="portfolio">
          p o r t f o l i o
        </Link>
      </Toolbar>
    </AppBar>
  );
}
