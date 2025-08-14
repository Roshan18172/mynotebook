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
  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;