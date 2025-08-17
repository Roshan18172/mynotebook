import React,{useContext} from 'react'
import NoteContext from '../context/noteContext'
const NoteItem = (props) => {
    // This component will display individual note items
    // It will receive note data as props and render the note details
    // For now, we will leave it empty and implement it later
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note,updateNote } = props;
    const handleDelete=()=>{
        deleteNote(note._id)
        // props.showAlert("Note Deleted","Success")
    }
    const handleUpdate=()=>{
        updateNote(note)
        // props.showAlert("Note Deleted","Success")
    }
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <p className="card-text"><small className="text-muted">{note.tag}</small></p>
                {/* <p className="card-text"><small className="text-muted">User ID: {note.user}</small></p> */}
                {/* <p className="card-text"><small className="text-muted">Version: {note.__v}</small></p> */}
                <p className="card-text"><small className="text-muted">Created At: {new Date(note.createdAt).toLocaleString()}</small></p>
                {/* <p className="card-text"><small className="text-muted">ID: {note._id}</small></p> */}
                {/* <p className="card-text"><small className="text-muted">{new Date(note.createdAt).toLocaleDateString()}</small></p> */}
                <button className="btn btn-primary my-2 mx-1" onClick={handleUpdate} >Edit Note <i className="bi bi-pencil-square "></i></button>
                <button className="btn btn-danger my-2 mx-1" onClick={handleDelete}>Delete Note <i className="bi bi-trash "></i></button>
            </div>
        </div>
    )
}

export default NoteItem
