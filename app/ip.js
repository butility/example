
import { div, body, a } from "../@butility/dom/html.js";
import IP from "../@butility/network/ip.js";

IP.getUserIPAddress((ip) => {
    IP.getLocationByIP(ip, (loc) => {
        body(
            div({class: "location"},
            `
                You are located at:
                - latitude: ${loc.latitude}
                - longitude: ${loc.longitude}
            `),
            a({ href: "?page" }, " Back ")
        )
    })
});
