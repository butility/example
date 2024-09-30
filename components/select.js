
import { div, a } from "@butility/dom/html";

const SelectComponent = () => {
    return div({ class: "select-container" },
        a({href: "?page=article&article=post-1"}, "Post 1"),
        a({href: "?page=article&article=post-2"}, "Post 2"),
        a({href: "?page=article&article=post-3"}, "Post 3"),
        a({href: "?page=article&article=post-4"}, "Post 4"),
        a({href: "?page=article&article=post-5"}, "Post 5"),
        a({href: "?page=article&article=post-6"}, "Post 6"),
    )
};

export { SelectComponent }