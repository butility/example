
import { div, article } from "@butility/dom/html";

const ArticleComponent = (articleContent) => {
    return div({ class: "article" },
        article(articleContent)
    )
};

export { ArticleComponent };