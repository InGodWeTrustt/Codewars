const { create } = require('domain')
const fs = require('fs')
const { join } = require('path')

const defaultFolder = join(__dirname, 'codewars-Solutions')

const createDir = (path, name) => {
    fs.mkdirSync(join(path, `${name}`))
}

// for (let i = 1; i <= 7; i++) {
//     createDir(defaultFolder, `${i} kyu`)
// }

fs.readdirSync(defaultFolder).forEach( element => {
    const dirContent = defaultFolder + '\\'+ element
    if(fs.statSync(dirContent).isFile()){
        const numberKyu = element.match(/(?<num>\d+)(\s?|_)kyu/);
        if(numberKyu){
            fs.rename(join(defaultFolder, element), join(defaultFolder, `${numberKyu.groups['num']} kyu`, element), ()=>{})
        }
    }
})