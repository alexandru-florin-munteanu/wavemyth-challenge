import React from "react";

import "../utils.scss";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="footer flex flex__column">
      <p className="copy">Copyright &copy; COSMOS 2022. All rights reserved.</p>
      <p className="disclaimer">
        All data and company references are purely fictitious and shouldn’t be
        confused with real world entities or names.
      </p>
    </footer>
  );
};

export default Footer;
