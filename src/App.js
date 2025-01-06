import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./keycloak";
import Nav from "./components/Nav";
import PrivateRoute from "./helpers/PrivateRoute";
import {HomePage} from "./pages/Homepage";
import {SecuredPage} from "./pages/Securedpage";

const App = () => {
    const basename = window.location.pathname.startsWith("/client1") ? "/client1" : "/client2";
    const requiredRole = basename === "/client1" ? ["client1-role"] : ["client2-role"];

    return (
        <ReactKeycloakProvider authClient={keycloak}>
            <BrowserRouter basename={basename}>
                <Nav/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route
                        path="/secured"
                        element={
                            <PrivateRoute roles={requiredRole}>
                                <SecuredPage/>
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ReactKeycloakProvider>
    );
};

export default App;
