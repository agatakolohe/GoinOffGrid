import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/" to="/">
          <img
            src="https://img.freepik.com/free-vector/wallpaper-of-mountain-ink_23-2147496496.jpg"
            width="10%"
            className="d-inline-block align-top"
            alt="Mountain SVG"
            loading="lazy"
          ></img>
          Goin Off Grid
        </a>
        <Link to="/">Home</Link>
        <Link to="/signin">Account</Link>
      </nav>
    </React.Fragment>
  );
}

export default Header;
