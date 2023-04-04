import React from "react";
import images from "../new-logo.jpg";

function Navbar() {
  return (
    <nav>
      <img src={images} alt="new-logo" className="nav--logo" />
    </nav>
  );
}

export default Navbar;
