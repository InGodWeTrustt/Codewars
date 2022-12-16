# Codewars
В данном тестовом репозитории представлены решения задач с сайта [Codewars](https://www.codewars.com/dashboard), которые имеют различную сложность и поделены по категориям.


Коммит:

    npm run deploy

**index.js**

    const { join } = require('path')
    const { execSync, fork } = require('child_process')
    const child = fork(join(__dirname, 'moveFilesInFolder.js'))
    child.on('message', msg => execSync(`npm run git -- "${msg}"`))

**moveFilesInFolder.js**

    moveFiles(WORK_FOLDER, DEF_FOLDER);
    let result = Object.entries(map).map(([num, { count, named }], _, arr) => {
        if (arr.length === 1 && count === 1) {
            return `${num} kyu ${named[0]}.js`
        } else {
            return `${num} kyu (${count})`
        }
    }).join(', ')
    process.send(result)
