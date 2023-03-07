function getMichaelLastName(inputText) {
    const reg = /(?<=Michael\s)[A-Z][a-z]+/g
    return inputText.match(reg)
}

// Example
const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

console.log(getMichaelLastName(inputText), ["Jordan","Johnson","Green","Wood"]);