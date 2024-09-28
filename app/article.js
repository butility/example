
import { ArticleComponent } from "../components/article.js";
import { loadArticle } from "./load.js";
import { body, a, p } from "../@butility/dom/html.js";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const article = params.get("article");

loadArticle(article).then((response) => {
    body(
        ArticleComponent(response),
        p(" More: "),
        a({ href: "?page=ip" }, "Show my IP")
    )
}).catch(error => console.log(error))