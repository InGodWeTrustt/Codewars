function areaCode(text) {
    return text.match(/\((\d+)\)/)[1];
}

// Example
console.log(areaCode("The supplier's phone number is (555) 867-5309"), '555');
console.log(areaCode("Grae's cell number used to be (123) 456-7890"), '123');
console.log(areaCode("The 102nd district court's fax line is (124) 816-3264"), '124');