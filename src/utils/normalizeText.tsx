export const normalizeText = (text: string = '', length: number) => {
    const cleanText = removeHtmlTags(text); 
    const shortText = substringText(removeHtmlTags(cleanText), length == 0 ? cleanText.length : length);
    return shortText + (shortText.length < cleanText.length ? "..." : "");
}   

export const removeHtmlTags = (text: string) => {
    return text.replace(/(<([^>]+)>)/gi, "");
}

const substringText = (text: string, length: number) => {
    return text.substring(0, length);
}