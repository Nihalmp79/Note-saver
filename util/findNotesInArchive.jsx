import React from 'react'

const findNotesInArchive = (archive,id) =>{
      return archive.some(note => note.id === id)
    }

export default findNotesInArchive
