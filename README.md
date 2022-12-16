# Codewars
В данном тестовом репозитории представлены решения задач с сайта [Codewars](https://www.codewars.com/dashboard), которые имеют различную сложность и поделены по категориям.


Коммит:

    npm run deploy

**index.js**

    // импортируем необходимые модули
    const { join } = require('path')
    const { execSync, fork } = require('child_process')

    // запускаем дочерний процесс
    const child = fork(join(__dirname, 'moveFilesInFolder.js'))

    // Слушаем событие "message" и первым аргументов в коллбек-функцию будет попадать наше сообщение из дочернего процесса
    child.on('message', msg => execSync(`npm run git -- "${msg}"`))

**moveFilesInFolder.js**

    // Перемещаем файлы из папки *WORK_FOLDER* в *DEF_FOLDER*
    moveFiles(WORK_FOLDER, DEF_FOLDER);

    // В переменную 'result' будет попадать сообщение для коммита
    let result = Object.entries(map).map(([num, { count, named }], _, arr) => {
        if (arr.length === 1 && count === 1) {
            return `${num} kyu ${named[0]}.js`
        } else {
            return `${num} kyu (${count})`
        }
    }).join(', ')

    // ДОЧЕРНИЙ ПРОЦЕСС (CHILD PROCESS) посылает сообщение
    process.send(result)
