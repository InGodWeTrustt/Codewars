function solution(input, markers) {

    const regExp = new RegExp(`${markers.map(mark => {
      if(mark.includes('$')){
        return `\\${mark}.*`
      } else{
        return`${mark}.*`
      }
    }).join('|')}`)

    input = input.split(regExp).map(str => str.trim()).filter(x=> x).join('\n')
    return input
};

