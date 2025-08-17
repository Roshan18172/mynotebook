import React from 'react'
import Notes from './Notes';

function Home(props) {
  return (
    <div style={{marginTop:"80px"}}>
      <h2>Welcome to My Notebook</h2>
        <div className="container my-3" >
        <Notes showAlert={props.showAlert} />
        </div>
      </div>
  )
}

export default Home
