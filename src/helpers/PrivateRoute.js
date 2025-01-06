import React from "react";
import {useKeycloak} from "@react-keycloak/web";

const PrivateRoute = ({children, roles}) => {
    const {keycloak} = useKeycloak();

    if (!keycloak.authenticated) {
        return <div>Access Denied</div>;
    }

    if (roles && !roles.some((role) => keycloak.hasRealmRole(role))) {
        return <div>Access Denied</div>;
    }

    return children;
};

export default PrivateRoute;
