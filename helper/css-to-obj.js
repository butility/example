
export function cssToObject(cssString) {
    const cssObject = {};
    
    // Match all selectors and their corresponding CSS rules
    const regex = /([^{]+)\{([^}]+)\}/g;
    let match;
    
    while ((match = regex.exec(cssString)) !== null) {
        const selector = match[1].trim(); // Extract selector
        const rules = match[2].replace(/\s+/g, ' ').trim(); // Remove newlines and extra spaces
        cssObject[selector] = rules;
    }
    
    return cssObject;
}
