
import { head, title } from "../@butility/dom/html.js";
import { loadWebFont } from "../@butility/style/style.js";


// Until the @butility/router pkg is developed we use basic router with params.
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const page = params.get("page");

if (page === "ip") {
    await import("./ip.js");
} else if (page === "form") {
    await import("./form.js");
} else if (page === "select") {
    await import("./select.js");
} else if (page === "article") {
    await import("./article.js");
} else { // Load the form as index
    await import("./form.js");
}

loadWebFont({
    family: "Roboto",
    elements: [ "body" ],
});

head(
    title("Butility example")
);