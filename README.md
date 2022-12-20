# Codewars
В данном тестовом репозитории представлены решения задач с сайта [Codewars](https://www.codewars.com/dashboard), которые имеют различную сложность (8 kyu, 7 kyu и так далее) и поделены в зависимости от сложности.


## Коммит (необязательная информация)

    npm run deploy

**index.js**

    // импортируем необходимые модули
    const { join } = require('path')
    const { execSync, fork } = require('child_process')

    // запускаем дочерний процесс
    const child = fork(join(__dirname, 'moveFilesInFolder.js'))

    // Слушаем событие "message" и первым аргументом в коллбек-функцию 
    // будет попадать наше сообщение из дочернего процесса
    // Далее будет запускаться на исполнение наш npm scripts
    child.on('message', msg => execSync(`npm run git -- "${msg}"`))

**moveFilesInFolder.js**

    // Перемещаем файлы из папки *WORK_FOLDER* (в моем случае это папка "test", которая указана в .gitignore и поэтому в этом репозитории не видна) в *DEF_FOLDER*
    moveFiles(WORK_FOLDER, DEF_FOLDER);

    // В переменную 'result' будет присваиваться сообщение для коммита
    let result = Object.entries(map).map(([num, { count, named }], _, arr) => {
        if (arr.length === 1 && count === 1) {
            return `${num} kyu ${named[0]}.js`
        } else {
            return `${num} kyu (${count})`
        }
    }).join(', ')

    // ДОЧЕРНИЙ ПРОЦЕСС (CHILD PROCESS) посылает сообщение
    process.send(result)
