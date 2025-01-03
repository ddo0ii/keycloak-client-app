import React from "react";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import keycloak from "./keycloak";
import {HomePage} from "./pages/Homepage";
import {SecuredPage} from "./pages/Securedpage";
import Nav from "./components/Nav";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
    return (
        <ReactKeycloakProvider authClient={keycloak}>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route path="/secured" element={
                        <PrivateRoute>
                            <SecuredPage/>
                        </PrivateRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </ReactKeycloakProvider>
    );
}

export default App;
