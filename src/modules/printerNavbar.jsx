import React from "react";
import fortusLogo from "../images/Fort450F.png";
import { Link } from "react-router-dom";
const PrinterNavBar = (props) => {
  const { user } = props;
  if (user.role === "admin") {
    return (
      <React.Fragment>
        <img id="fortus-logo" src={fortusLogo} alt="" />
        <span id="blue">3D Printer</span>
        <span id="white"> Manager</span>
        <nav className="navbar navbar-dark mb-5">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/calculator">
                <div className="nav-link active" aria-current="page">
                  Kalkulator
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders">
                <div className="nav-link">Zlecenia wydruku</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/storage">
                <div className="nav-link" aria-current="page">
                  Stan Magazynu 011
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link">Formularze</div>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
  if (user.role === "sales") {
    return (
      <React.Fragment>
        <img id="fortus-logo" className="mt-3" src={fortusLogo} alt="" />
        <span id="blue">3D Printer</span>
        <span id="white"> Manager</span>
        <nav className="navbar navbar-dark mb-5">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/new-order">
                <div className="nav-link active" aria-current="page">
                  Nowe zlecenie wydruku
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders">
                <div className="nav-link">Status twoich zlecen</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/information-materials">
                <div className="nav-link" aria-current="page">
                  Informajca: Materialy
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/information-printer">
                <div className="nav-link">Informajca: Drukarka</div>
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
};

export default PrinterNavBar;
