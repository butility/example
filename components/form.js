import { form, input, button } from "../@butility/dom/html.js";
import Style, { loadWebFont } from "../@butility/style/style.js";
import { cssToObject } from "../helper/css-to-obj.js";

const loadStyles = Style.load("./style/form.css");
const styles = cssToObject(loadStyles.cssText);

loadWebFont({
    family: "Roboto",
    elements: [ "form", "input", "button" ]
});

const FormComponent = form({ method: "POST", style: styles["form"]},
    input({ id: "input", placeholder: "Email", name: "email", autocomplete: false, style: styles['.width-300px'] }),
    input({ id: "password", placeholder: "Password", name: "password", type: "password", autocomplete: false, style: styles['.width-300px'] }),
    button({ type: "submit" }, "Submit")
);

export { FormComponent };
