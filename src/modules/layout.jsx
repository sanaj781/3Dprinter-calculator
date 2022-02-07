import React, { Component } from "react";
import App from "../App";
import drabpolLogo from "../images/DRABPOL-white2.webp";
import fortusLogo from "../images/Fort450F.png";
import scanerLogo from "../images/einscan-logo.png";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 left-nav">
              <img
                id="drabpol-logo"
                className="d-inline-block align-text-top mb-5 mt-3"
                src={drabpolLogo}
                alt=""
              />
              <img id="fortus-logo" className="mt-3" src={fortusLogo} alt="" />
              <span id="blue">3D Printer</span>
              <span id="white"> Manager</span>
              <nav className="navbar navbar-dark mb-5">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Kalkulator
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Magazyn011
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      Cennik zakupu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Formularze
                    </a>
                  </li>
                </ul>
              </nav>

              <img id="scaner-logo" className="" src={scanerLogo} alt="" />
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
            </div>
            <div className="col-10 content-section pt-5">
              <App />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
