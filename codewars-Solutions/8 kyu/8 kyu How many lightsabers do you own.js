function howManyLightsabersDoYouOwn(name = 'name') {
    return name !== "Zach" ? 0 : 18;
  }


console.log(howManyLightsabersDoYouOwn(), 0)
console.log(howManyLightsabersDoYouOwn("Adam"), 0)
console.log(howManyLightsabersDoYouOwn("Zach"), 18)