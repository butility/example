
import IP from "@butility/network/ip";
import { body } from "@butility/dom/html";
import { IPComponent } from "../components/ip.js";

IP.getUserIPAddress((ip) => {
    IP.getLocationByIP(ip, (loc) => {
        body(
            IPComponent(loc)
        )
    })
});
