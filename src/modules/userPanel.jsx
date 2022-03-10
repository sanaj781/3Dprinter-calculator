import React from "react";
import { Link } from "react-router-dom";

const UserPanel = (props) => {
  const { user, notifications, onLogout } = props;
  const handleClick = async () => {};
  if (user) {
    return (
      <React.Fragment>
        <div className="userPanel">
          <p>Uzytkownik: {user.username}</p>
          <Link to="/notifications">
            <div onClick={handleClick}>
              {" "}
              <i className="bi bi-bell-fill">{notifications}</i>
            </div>
          </Link>
          <button className="btn btn-danger" onClick={onLogout}>
            Logout
          </button>
        </div>
      </React.Fragment>
    );
  } else return null;
};

export default UserPanel;
