const splitter = (sentence, startIndex, lastIndex) => {
    if (!sentence) return ""; // Handle undefined or null input
    const words = sentence.split(" ");
    return words.slice(startIndex, lastIndex).join(" "); // Join words to ensure correct display
};

export {splitter}