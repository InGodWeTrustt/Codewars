const fs = require('fs')
const { join } = require('path')
const { DEF_FOLDER, WORK_FOLDER } = require('./constants')


const createDir = (path, name) => fs.mkdirSync(join(path, `${name}`))

// example { '5': {count: 1, named: ['', '']} }
const map = {}

const moveFiles = (from, to) => {
    const fileNames = fs.readdirSync(from);

    // if is empty dir, then return
    if (!fileNames.length) return;
    
    fileNames.forEach(element => {
        const dirContent = from + '\\' + element;

        if (fs.statSync(dirContent).isFile()) {
            const { num, title } = element.match(/(?<num>\d+)(\s|_)?kyu\s+(?<title>.*).js/).groups;

            if (num) {
                const fileNameWithExt = `${num} kyu ${title}.js`
                if (map[num]) {
                    map[num].count++;
                    map[num].named.push(title)
                } else {
                    map[num] = { count: 1, named: [title] }
                }
                fs.rename(join(from, element), join(to, `${num} kyu`, fileNameWithExt), () => { })
            }
        }
    })
}


moveFiles(WORK_FOLDER, DEF_FOLDER);


let result = Object.entries(map).map(([num, { count, named }], _, arr) => {
    if (arr.length === 1 && count === 1) {
        return `${num} kyu ${named[0]}.js`
    } else {
        return `${num} kyu (${count})`
    }
}).join(', ')


process.send(result.length ? result : 'update')