import React from 'react'
import Notes from './Notes';

function Home() {
  return (
    <div>
      <h2>Welcome to My Notebook</h2>
        <div className="container my-3" >
        <Notes />
        </div>
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
  )
}

export default Home
