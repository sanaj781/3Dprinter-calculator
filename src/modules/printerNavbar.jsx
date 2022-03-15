import React from "react";
import fortusLogo from "../images/Fort450F.png";
import { NavLink } from "react-router-dom";
const PrinterNavBar = (props) => {
  const { user } = props;
  if (user.role === "admin") {
    return (
      <React.Fragment>
        <div className="printer-nav mb-5">
          <img id="fortus-logo" src={fortusLogo} alt="" />
          <span id="blue">3D Printer</span>
          <span id="white"> Manager</span>
          <nav className="navbar navbar-dark mb-5">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/calculator"
                >
                  Kalkulator
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/orders"
                >
                  Zlecenia wydruku
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/storage"
                >
                  Stan Magazynu 011
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="nav-link">Formularze</div>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
  if (user.role === "sales") {
    return (
      <React.Fragment>
        <div className="printer-nav mb-5">
          <img id="fortus-logo" className="mt-3" src={fortusLogo} alt="" />
          <span id="blue">3D Printer</span>
          <span id="white"> Manager</span>
          <nav className="navbar navbar-dark mb-5">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/new-order"
                >
                  Nowe zlecenie wydruku
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/orders"
                >
                  Status twoich zlecen
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/information-materials"
                >
                  Informajca: Materialy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/information-printer"
                >
                  Informajca: Drukarka
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
};

export default PrinterNavBar;
