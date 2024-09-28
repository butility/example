
import { body, div } from "../@butility/dom/html.js";
import { FormComponent } from "../components/form.js";

// Append the form and other actions
body(
    div({ class: "form-container" },
        FormComponent
    )
);
