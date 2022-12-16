const { join } = require('path')
const { execSync, fork } = require('child_process')

const child = fork(join(__dirname, 'moveFilesInFolder.js'))

child.on('message', msg => execSync(`npm run git -- ${msg}`))