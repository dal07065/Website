import { AppBar, IconButton, Toolbar } from "@mui/material";
import { House } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
          <IconButton
            size="large"
            edge="start"
            aria-label="logo"
            sx={{
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#000000",
              },
              "&:active": {
                backgroundColor: "ffffff",
                color: "#000000",
              },
            }}
          >
            <House />
          </IconButton>
        </Link>
        <Link to="/about" style={linkStyle}>
          l i n a ∙ k a n g
        </Link>
        <Link to="/portfolio" style={linkStyle}>
          p o r t f o l i o
        </Link>
      </Toolbar>
    </AppBar>
  );
}
