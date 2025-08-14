import React, { useContext } from 'react'
import NoteContext from '../context/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const a = useContext(NoteContext);
    const { notes, setNotes } = a;
    return (
        <div className="container my-3">
            <h2 className='my-3'>Your Notes</h2>
            {notes.length === 0 && 'No notes to display'}
            <div className="row">
                {notes.map((note) => (
                    <div className="col-md-3 mb-4" key={note._id}>
                        <NoteItem note={note} />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Notes
