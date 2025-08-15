import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(()=>{
        getNotes()
    },[])
    const updateNote = (note) =>{

    }
    return (
        <>
            <AddNote />
            <div className="container my-3" style={{backgroundColor: "lightgrey", padding: "5px"}}>
                <h2 className='my-3'>Your Notes</h2>
                {notes.length === 0 && 'No notes to display'}
                <div className="row">
                    {notes.map((note) => (
                        <div className="col-md-3 mb-4" key={note._id}>
                            <NoteItem note={note} updateNote={updateNote} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Notes
