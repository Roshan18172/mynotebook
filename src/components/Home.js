import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/noteContext';


function Home() {
  const a = useContext(NoteContext);
  const { notes, setNotes } = a;

  return (
    <div>
      <h2>Welcome to My Notebook</h2>
      <div className='container my-3'>
      <h2>Add a Note : </h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <h2 className='my-3'>Your Notes</h2>
      {notes.map((note) => {
        return (
          <div className="card my-2" key={note._id}>
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.description}</p>
              <button className="btn btn-primary my-2">Edit Note</button>
              <button className="btn btn-danger my-2">Delete Note</button>
            </div>
          </div>
        )
      })}
      {/* <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card my-2">
                <div className="card-body">
                  <h5 className="card-title">Note Title</h5>
                  <p className="card-text">This is a sample note.</p>
                  <button className="btn btn-primary my-2">Edit Note</button>
                  <button className="btn btn-danger my-2">Delete Note</button>
                </div>
              </div>
            </div>
          </div> */}
    </div>
      </div >
  )
}

export default Home
