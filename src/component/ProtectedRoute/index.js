import React from "react";
import { Redirect, Route, useNavigation } from "react-router-dom";

function ProtectedRoute({ token, component: Component, ...rest }) {
  const navigate = useNavigation();
  return (
    <Route
      {...rest}
      render={() => {
        if (token) {
            navigate(component);
        } else {
          navigate("/");
        }
      }}
    />
  );
}
export default ProtectedRoute;
