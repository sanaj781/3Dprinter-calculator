import React from "react";
import scanerLogo from "../images/einscan-logo.png";

const SkanerNavBar = () => {
  return (
    <React.Fragment>
      <img id="scaner-logo" src={scanerLogo} alt="" />
      <span id="blue">3D Scaner</span>
      <span id="white"> Manager</span>
      <nav className="navbar navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Materialy szkoleniowe
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Oprogramowanie
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Projekty
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              O urzadzeniu
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default SkanerNavBar;
