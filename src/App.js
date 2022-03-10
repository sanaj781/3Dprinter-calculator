import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import drabpolLogo from "./images/DRABPOL-white2.webp";
import drabpolLogoBlack from "./images/Drabpol-1600x640.jpeg";
import Layout from "./modules/layout";
import PrinterNavBar from "./modules/printerNavbar";
import SkanerNavBar from "./modules/skanerNavbar";
import UserPanel from "./modules/userPanel";
import Calculator from "./modules/calculator/calculator";
import NewOrder from "./modules/newOrder";
import Login from "./modules/loginPage";
import Orders from "./modules/roleSales/allOrders";
import Storage from "./modules/roleSales/storage";
import Notifications from "./modules/notifications";
const API_PATH_AUTH = "http://localhost:8888/login/APIs/userAuth.php";
const API_PATH_NOTIFICATIONS =
  "http://localhost:8888/login/APIs/notifications.php";

// const API_PATH = "./APIs/userLogin.php";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [notifications, setNotifications] = useState(0);
  const [errors, setErrors] = useState();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
      //Check if there are new notifications if user found
      axios.get(API_PATH_NOTIFICATIONS).then((res) => {
        setNotifications(res.data.notifications);
      });
    }
  }, []);
  const handleLogout = () => {
    setUser();
    setUsername("");
    setPassword("");
    localStorage.clear();
    window.location = "/";
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: API_PATH_AUTH,
      headers: {
        "content-type": "application/json",
      },
      data: { username, password },
    })
      .then((result) => {
        if (JSON.stringify(result.data) === JSON.stringify({ error: 1 }))
          console.log("Nieprawidlowe haslo lub login");
        else {
          localStorage.setItem("user", JSON.stringify(result.data));
          setUser(result.data);
          window.location = "/main";
        }
      })
      .catch((error) => setErrors(error.message));
  };
  if (!user) {
    return (
      <div className="container-fluid  align-content-between">
        <div className="row main content ">
          <div className="col-4 offset-4">
            <img
              id="drabpol-logo"
              className="d-inline-block align-text-top mb-5 mt-3"
              src={drabpolLogoBlack}
              alt=""
            />
          </div>
          <div className="col-12 content-section p-0 d-flex flex-column align-items-center ">
            <Login
              username={username}
              password={password}
              user={user}
              onEmailChange={(e) => setUsername(e.target.value)}
              onPasswordChange={(e) => setPassword(e.target.value)}
              onSubmit={onSubmit}
            />
          </div>
        </div>
        {/* push footer to bottom */}
        <div className="flex-grow-1"></div>
        <div className="row footer">
          <div>Created by Drabpol</div>
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="container-fluid align-content-between">
          <div className="row main-content flex-grow-1">
            <div className="col-2 left-nav">
              <img
                id="drabpol-logo"
                className="d-inline-block align-text-top mb-5 mt-3"
                src={drabpolLogo}
                alt=""
              />

              {user && (
                <React.Fragment>
                  <PrinterNavBar user={user} />
                  <SkanerNavBar />
                </React.Fragment>
              )}
            </div>
            <div className="col-10 content-section p-0 px-5">
              <UserPanel
                user={user}
                notifications={notifications}
                onLogout={handleLogout}
              />
              <div>
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={
                      <Login
                        username={username}
                        password={password}
                        user={user}
                        onEmailChange={(e) => setUsername(e.target.value)}
                        onPasswordChange={(e) => setPassword(e.target.value)}
                        onSubmit={onSubmit}
                      />
                    }
                  />
                  <Route
                    path="/main"
                    element={
                      <Layout
                        user={user}
                        password={password}
                        username={username}
                        onEmailChange={(e) => setUsername(e.target.value)}
                        onPasswordChange={(e) => setPassword(e.target.value)}
                        onSubmit={onSubmit}
                        onLogout={handleLogout}
                      />
                    }
                  />
                  <Route path="/orders" element={<Orders user={user} />} />
                  <Route path="/new-order" element={<NewOrder user={user} />} />

                  <Route path="/storage" element={<Storage />} />
                  <Route path="/calculator" element={<Calculator />} />
                  <Route path="/notifications" element={<Notifications />} />
                </Routes>
              </div>
            </div>
          </div>
          <div className="row footer">
            <div>Created by Drabpol</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default App;
