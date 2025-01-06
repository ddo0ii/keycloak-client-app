import React from "react";
import {useKeycloak} from "@react-keycloak/web";

const Nav = () => {
    const {keycloak} = useKeycloak();
    const basename = window.location.pathname.startsWith("/client1") ? "/client1" : "/client2";

    return (
        <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                <h1 className="text-3xl font-bold font-heading">
                    Keycloak React AUTH.
                </h1>
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                    <li>
                        <a href={`${basename}/`} className="hover:text-blue-800">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href={`${basename}/secured`} className="hover:text-blue-800">
                            Secured Page
                        </a>
                    </li>
                </ul>
                <div className="hidden xl:flex items-center space-x-5">
                    {!keycloak.authenticated ? (
                        <button
                            className="text-blue-800"
                            onClick={() => keycloak.login({redirectUri: `${window.location.origin}${basename}`})}
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            className="text-blue-800"
                            onClick={() => keycloak.logout({redirectUri: `${window.location.origin}${basename}`})}
                        >
                            Logout ({keycloak.tokenParsed?.preferred_username || "User"})
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
