import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial=[]
  const [notes, setNotes] = useState(notesInitial);
  const getNotes = async () => {
    const response = await fetch(`${host}/api/note/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5ZjYwOTZiM2NlNDBkZTMwOTllNjgyIn0sImlhdCI6MTc1NTI3NTQ0OX0.FC6LeO-RumxeJXtjl9XHicADI_b4Pauu8uFriDARFqA"
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json)
  }

  //Add a note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5ZjYwOTZiM2NlNDBkZTMwOTllNjgyIn0sImlhdCI6MTc1NTI3NTQ0OX0.FC6LeO-RumxeJXtjl9XHicADI_b4Pauu8uFriDARFqA"
      },
      // Automatically converted to "username=example&password=password"
      body: JSON.stringify({ title, description, tag })
    });
    const json =await response.json();

    console.log("Adding a new note")
    // const note = json.notes
    setNotes(notes.concat(json))
  }
  //Delete a note
  const deleteNote =async (_id) => {
    const response = await fetch(`${host}/api/note/deletenote/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5ZjYwOTZiM2NlNDBkZTMwOTllNjgyIn0sImlhdCI6MTc1NTI3NTQ0OX0.FC6LeO-RumxeJXtjl9XHicADI_b4Pauu8uFriDARFqA"
      }
    });
    const json=await response.json()
    console.log(json)
    console.log("deleting note with id" + _id)
    const newNote = notes.filter((note) => { return note._id !== _id })
    setNotes(newNote)
  }
  //Edit a note
  const editNote = async (_id, title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/note/updatenote/${_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5ZjYwOTZiM2NlNDBkZTMwOTllNjgyIn0sImlhdCI6MTc1NTI3NTQ0OX0.FC6LeO-RumxeJXtjl9XHicADI_b4Pauu8uFriDARFqA"
      },
      // Automatically converted to "username=example&password=password"
      body: JSON.stringify({ title, description, tag })
    });
    const json =await response.json();
    console.log(json)
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === _id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;