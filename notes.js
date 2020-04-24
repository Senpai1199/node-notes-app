const fs = require("fs")
const chalk = require("chalk")

const addNote = (title, body) => {
    noteData = { // new note
        title: title,
        body: body
    }
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title // if true then copies into duplicateNotes
    // })

    if (!duplicateNote) {
        notes.push(noteData)
        saveNotes(notes)
        console.log(chalk.green("New note added."))
    } else {
        console.log(chalk.red("Note title taken."))
    }
   
}

const saveNotes = (notes) => { // save notes in notes.json
    noteDataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", noteDataJSON + "\n")
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
  
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return (note.title !== title)
    })
    if (notesToKeep.length == notes.length) {
        console.log(chalk.red("No note found!"))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green("Note removed!"))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green("Your Notes"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const requiredNote = notes.find((note) => note.title === title)
    if (requiredNote) {
        console.log(chalk.blue(requiredNote.title + ": "))
        console.log(chalk.green(requiredNote.body))
    } else {
        console.log(chalk.red("Note not found"))
    }
}


module.exports = {
    getNotes, addNote, removeNote, listNotes, readNote
}
