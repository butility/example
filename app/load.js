
import { Request } from "@butility/network";

export function loadArticle(articleName) {
    return new Promise((resolve, reject) => {
        Request.get(`./articles/${articleName}.html`, {}, {
            useFetch: true,
            success: (response) => {
                resolve(response);
            },
            error: (error) => {
                reject(error)
            }
        })
    }) 
}