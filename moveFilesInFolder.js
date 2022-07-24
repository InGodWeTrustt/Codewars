const fs = require('fs')
const { join } = require('path')

const defFolder = join(__dirname, 'codewars-Solutions')

const createDir = (path, name) => {
    fs.mkdirSync(join(path, `${name}`))
}

// for (let i = 1; i <= 4; i++) {
//     createDir(defFolder, `${i} kyu`)
// }

const moveFiles = (from,  to) =>{
    fs.readdirSync(from).forEach( element => {
        const dirContent = from + '\\'+ element
        if(fs.statSync(dirContent).isFile()){
            const numberKyu = element.match(/(?<num>\d+)(\s?|_)kyu/);
            if(numberKyu){
                fs.rename(join(from, element), join(to, `${numberKyu.groups['num']} kyu`, element), ()=>{})
            }
        }
    })
}

moveFiles(join(__dirname, 'test'), defFolder)