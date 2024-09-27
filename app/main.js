
import { head, title } from "../@butility/dom/html.js";
import { loadWebFont } from "../@butility/style/style.js";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

if (params.get("page") === "ip") {
    await import("./ip.js");
} else {
    await import("./form.js");
}

loadWebFont({
    family: "Roboto",
    elements: [ "body" ],
});

head(
    title("Butility example")
);