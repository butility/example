import { form, input, button } from "../@butility/dom/html.js";
import Style, { loadWebFont } from "../@butility/style/style.js";
import { cssToObject } from "../helper/css-to-obj.js";
import { Validate } from "../@butility/form/form.js";

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

FormComponent.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = Validate.form(FormComponent, {
        "email": {
            required: true,
            customValidator: (email) => Validate.email(email),
            errorMessage: "That is not valid Email"
        },
        "password": {
            required: true,
            customValidator: (password) => Validate.passwordStrength(password).isStrong,
            errorMessage: "use better password"
        }
    });

    if (isValid.valid) {
        alert("You are good to go. Click okay to continue");
        window.location.href = "?page=select"
    } else {
        isValid.errors.forEach(error => {
            alert(error.message)
        })
    }

});

export { FormComponent };
