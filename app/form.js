
import { a, body, div } from "../@butility/dom/html.js";
import { FormComponent } from "../components/form.js";

body(
    div({ class: "form-container" },
        FormComponent
    )
);
