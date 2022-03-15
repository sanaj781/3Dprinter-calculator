import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  API_PATH_NOTIFICATIONS,
  API_PATH_NOTIFICATIONS_SALES,
} from "../APIs.js";

const UserPanel = (props) => {
  const { user, notifications, setNotifications, onLogout } = props;
  const [errors, setErrors] = useState();
  const username = user.username;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let isApiSubscribed = true;
    axios({
      method: "POST",
      url:
        user.role === "admin"
          ? API_PATH_NOTIFICATIONS
          : API_PATH_NOTIFICATIONS_SALES,
      signal: signal,
      headers: {
        // "content-type": "application/json",
      },
      data: { username },
    })
      .then((res) => {
        if (isApiSubscribed) setNotifications(res.data.notifications);
      })
      .catch((error) =>
        signal.aborted
          ? console.log("successfully aborted")
          : setErrors(error.message)
      );
  });
  errors && console.log(errors);

  return (
    <React.Fragment>
      <div className="userPanel">
        <p>Uzytkownik: {user.username}</p>
        <Link to="/notifications">
          <div>
            <i className="bi bi-bell-fill">{notifications}</i>
          </div>
        </Link>
        <button className="btn btn-danger" onClick={onLogout}>
          Logout
        </button>
      </div>
    </React.Fragment>
  );
};

export default UserPanel;
