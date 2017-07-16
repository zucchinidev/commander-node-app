#! /usr/bin/env node

const minimist = require('minimist')
console.log('hola mundo')
// Obtener parámetros
console.log(process.argv[0]) // node binary
console.log(process.argv[1]) // file
console.log(process.argv[2]) // message


// with minimist ./git.js commit -m "this is a message"
console.log(minimist(process.argv))
/*
{ _:
  [ '/usr/bin/nodejs',
    '/home/$USER/src/git-js/git.js',
    'commit' ],
    m: 'this is a message' }
 */
/*
 ./git.js --add file --force
{ _: [ '/usr/bin/nodejs', '/home/$USER/src/git-js/git.js' ],
  add: 'file',
  force: true }

*/
