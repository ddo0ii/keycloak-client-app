import Keycloak from "keycloak-js";

const path = window.location.pathname;
const clientId = path.startsWith("/client1") ? "client1" : "client2";

const keycloak = new Keycloak({
    url: "http://localhost:8080/",
    realm: "myrealm",
    clientId: clientId,
});

export default keycloak;
