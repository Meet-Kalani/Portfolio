import React from "react";
import logo from "../logo.svg";

const Header = () => {
  const headerStyle = {
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="text-center" style={headerStyle} id="home">
      <div className="d-flex justify-content-between pt-3 px-4">
        <h3 className="text-uppercase text-white text-center logo">
          <img
            src={logo}
            alt="logo"
            width="50"
            style={{ marginRight: "10px" }}
          />
          meet kalani
        </h3>

        <a
          href="https://forms.gle/dAWW96w5it6GYn7V9"
          className="text-white text-decoration-none"
        >
          Contact
        </a>
      </div>

      <h2 style={{ marginTop: "250px" }}>
          Web Developer
      </h2>
      <p>
          Stop Procastinating and Start doing.
      </p>
    </div>
  );
};

export default Header;
