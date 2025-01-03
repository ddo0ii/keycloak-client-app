import React, { createContext, useEffect, useState } from "react";
import keycloakInstance from "./keycloak";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (!keycloakInstance.authenticated) { // 이미 인증 상태를 확인
            keycloakInstance
                .init({ onLoad: "login-required", checkLoginIframe: false })
                .then((authenticated) => {
                    setIsAuthenticated(authenticated);
                    console.log("Keycloak authenticated:", authenticated);
                })
                .catch((err) => {
                    console.error("Keycloak initialization error:", err);
                });
        }
    }, []); // 빈 배열로 초기화가 한 번만 실행되도록 보장

    return (
        <AuthContext.Provider value={{ isAuthenticated, keycloakInstance }}>
            {children}
        </AuthContext.Provider>
    );
};
