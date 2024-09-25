
import { head, title } from "../@butility/dom/html.js";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

if (params.get("page") === "ip") {
    await import("./ip.js");
} else {
    await import("./form.js");
}

head(
    title("Butility example")
);