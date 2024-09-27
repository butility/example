
import { div, a } from "../@butility/dom/html.js";

const IPComponent = (loc) => {
    return div(
        div({class: "location"},
        `
            You are located at:
            - latitude: ${loc.latitude}
            - longitude: ${loc.longitude}
        `),
        a({ href: "?page" }, " Back ")
    );
}

export { IPComponent }