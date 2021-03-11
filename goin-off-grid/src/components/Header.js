import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#cbcdcb", opacity: "0.9" }}
      >
        <a className="navbar-brand" href="/" to="/">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/12/09/landscape-159294__480.png"
            width="11%"
            className="d-inline-block align-top"
            alt="Mountain SVG"
            loading="lazy"
          ></img>
          <strong>Goin Off Grid</strong>
        </a>
        <div
          style={{
            border: "2px dashed #aca4a4",
            borderRadius: "10px 20px",
            padding: "1%",
          }}
        >
          <Link to="/">Home</Link>
        </div>
        <div
          style={{
            border: "2px dashed #aca4a4",
            borderRadius: "10px 20px",
            padding: "1%",
            marginRight: "2%",
          }}
        >
          <Link to="/signin">Account</Link>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
