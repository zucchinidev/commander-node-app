#! /usr/bin/env node

const program = require('commander')

program
  .version('1.0.0')
  .description('A git clone program')

program
  .command('commit <message>')
  .description('commits a commit to the commit server')
  .option('-f, --force', 'forces a commit')
  .action(function (message, options) {
    console.log(message)
    if (options.force) {
      console.log('We are using a force push')
    }
  })

program.parse(process.argv)

// ./console-app.js -h
/*
Usage: console-app [options] [command]

A git clone program


Options:

-V, --version  output the version number
-h, --help     output usage information


Commands:

  commit [options] <message>  commits a commit to the commit server
*/

/*

  ./console-app.js  commit -h

Usage: commit [options] <message>

commits a commit to the commit server


Options:

  -f, --force  forces a commit
  -h, --help   output usage information
*/


// Use:
// ./console-app.js  commit "A commit message"
// A commit message
// ./console-app.js  commit "A commit message" -f
// A commit message
// We are using a force push
