const yargs = require('yargs')
const chalk = require('chalk')
const notesUtility = require('./notes')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true, // required option
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: "true", // required option
            type: "string"
        }
    },
    handler(argv) {
        notesUtility.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: "Title of note to be removed",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notesUtility.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder:{
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtility.readNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    demandOption: false,
    handler() {
        notesUtility.listNotes()
    }
})

yargs.parse()

// add, remove, read, list

// console.log(yargs.argv)


