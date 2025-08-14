import React from 'react'

const NoteItem = (props) => {
    // This component will display individual note items
    // It will receive note data as props and render the note details
    // For now, we will leave it empty and implement it later
    const { note } = props;
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <p className="card-text"><small className="text-muted">{note.tag}</small></p>
                <p className="card-text"><small className="text-muted">User ID: {note.user}</small></p>
                <p className="card-text"><small className="text-muted">Version: {note.__v}</small></p>
                <p className="card-text"><small className="text-muted">Created At: {new Date(note.createdAt).toLocaleString()}</small></p>
                <p className="card-text"><small className="text-muted">ID: {note._id}</small></p>
                <p className="card-text"><small className="text-muted">{new Date(note.createdAt).toLocaleDateString()}</small></p>
                <button className="btn btn-primary my-2 mx-2">Edit Note</button>
                <button className="btn btn-danger my-2 mx-2">Delete Note</button>
            </div>
        </div>

    )
}

export default NoteItem
