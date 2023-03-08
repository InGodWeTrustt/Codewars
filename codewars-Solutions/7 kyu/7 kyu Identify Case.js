function id(str) {
    if (/^([a-z]+(-[a-z]+)*)$/.test(str)) {
        return 'kebab'
    } else if (/^([a-z]+(_[a-z]+)*)$/.test(str)) {
        return 'snake'
    } else if (/^([a-z]+([A-Z][a-z]*)*)$/.test(str)) {
        return 'camel'
    }
    return 'none'
}

// Example
console.log(id("hello-world"), "kebab")
console.log(id("hello-to-the-world"), "kebab")
console.log(id("hello_world"), "snake")
console.log(id("hello_to_the_world"), "snake")
console.log(id("helloWorld"), "camel")
console.log(id("helloToTheWorld"), "camel")
console.log(id("hello-World"), "none")
console.log(id("hello-To-The-World"), "none")
console.log(id("good-Night"), "none")
console.log(id("he--llo"), "none")