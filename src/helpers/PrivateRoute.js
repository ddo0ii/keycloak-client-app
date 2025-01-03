import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
    const { keycloak } = useKeycloak();
    const isLoggedIn = keycloak.authenticated;

    return isLoggedIn ? children : <div>Access Denied</div>;
};

export default PrivateRoute;
