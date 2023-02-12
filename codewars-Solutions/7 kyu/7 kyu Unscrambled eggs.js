function unscrambleEggs(word) {
    return word.replace(/egg/g, "");
}

// Example
console.log(unscrambleEggs("ceggodegge heggeregge") === "code here");
console.log(unscrambleEggs("FeggUNegg KeggATeggA") === "FUN KATA");
console.log(unscrambleEggs("egegggegg") === "egg");