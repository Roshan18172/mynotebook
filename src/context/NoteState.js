import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "689d83bb66f15d7blkd698f4f74",
      "user": "689d833166f15d7b698f4f6e",
      "title": "myTitle",
      "description": "wake up early",
      "tag": "personal",
      "createdAt": "2025-08-14T06:35:39.144Z",
      "__v": 0
    },
    {
      "_id": "689d83bb66f15d7klb698f4f74",
      "user": "689d833166f15d7b698f4f6e",
      "title": "myTitle",
      "description": "wake up early",
      "tag": "personal",
      "createdAt": "2025-08-14T06:35:39.144Z",
      "__v": 0
    },
    {
      "_id": "689d83bb66f15d7klsb698f4f74",
      "user": "689d833166f15d7b698f4f6e",
      "title": "myTitle",
      "description": "wake up early",
      "tag": "personal",
      "createdAt": "2025-08-14T06:35:39.144Z",
      "__v": 0
    },
    {
      "_id": "689d83bb66f15d7b6skl98f4f74",
      "user": "689d833166f15d7b698f4f6e",
      "title": "myTitle",
      "description": "wake up early",
      "tag": "personal",
      "createdAt": "2025-08-14T06:35:39.144Z",
      "__v": 0
    },
    {
      "_id": "689d83bb66f15d7b6kjd98f4f74",
      "user": "689d833166f15d7b698f4f6e",
      "title": "myTitle",
      "description": "wake up early",
      "tag": "personal",
      "createdAt": "2025-08-14T06:35:39.144Z",
      "__v": 0
    },
    {
      "_id": "689d83bb66f15d7b69wjk8f4f74",
      "user": "689d833166f15d7b698f4f6e",
      "title": "myTitle",
      "description": "wake up early",
      "tag": "personal",
      "createdAt": "2025-08-14T06:35:39.144Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a note
    const addNote = (title, description, tag)=>{
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
          "_id": "61322f119553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a0664",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        };
        setNotes(notes.concat(note)) 
      }
  //Delete a note
  const deleteNote = (_id) => {
    console.log("deleting note with id"+_id)
    const newNote= notes.filter((note)=>{return note._id !==_id})
    setNotes(newNote)
  }


  //Edit a note
  const editNote = (_id,title,description,tag) => {
    
  }

  return (
    <NoteContext.Provider value={{ notes,addNote,deleteNote,editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;