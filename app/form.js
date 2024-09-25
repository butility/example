
import { Validate } from "../@butility/form/form.js";
import { a, body, div } from "../@butility/dom/html.js";
import { FormComponent } from "../components/form.js";
import { loadArticle } from "./load.js";
import { ArticleComponent } from "../components/article.js";

body(
    div({ class: "form-container" },
        FormComponent
    )
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
        loadArticle("post-1").then((response) => {
            body(
                ArticleComponent(response),
                a({ href: "?page=ip" }, "Show my IP")
            )
        }).catch(error => console.log(error))
    } else {
        isValid.errors.forEach(error => {
            alert(error.message)
        })
    }

})