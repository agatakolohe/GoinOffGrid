import React from "react";

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src="https://img.freepik.com/free-vector/wallpaper-of-mountain-ink_23-2147496496.jpg"
            width="10%"
            className="d-inline-block align-top"
            alt="Mountain SVG"
            loading="lazy"
          ></img>
        </a>
      </nav>
    </React.Fragment>
  );
}

export default Header;
