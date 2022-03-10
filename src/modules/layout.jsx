import React from "react";
import Calculator from "./calculator/calculator";
import Login from "./loginPage";
import NewOrder from "./newOrder";

const Layout = (props) => {
  const {
    username,
    password,
    user,
    onEmailChange,
    onPasswordChange,
    onSubmit,
  } = props;
  // Rendering depends on respond from backend
  if (user) {
    if (user.role === "admin") {
      return <Calculator user={user} />;
    }
    if (user.role === "sales") {
      return <NewOrder user={user} />;
    }
  } else
    return (
      <Login
        username={username}
        password={password}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onSubmit={onSubmit}
      />
    );
};

export default Layout;
