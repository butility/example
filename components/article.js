
import { div, article } from "../@butility/dom/html.js";

const ArticleComponent = (articleContent) => {
    return div({ class: "article" },
        article(articleContent)
    )
};

export { ArticleComponent };