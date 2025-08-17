import React,{useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const NavBar = () => {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Notebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/home"?"":"active"}`} aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"?"":"active"}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/contact"?"":"active"}`} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/notes">Notes</Link>
                        </li>
                    </ul>
                    <form className="d-flex me-5" >
                        <Link className='btn btn-warning mx-2' to='/login' role='button'>Login</Link>
                        <Link className='btn btn-warning mx-2' to='/signup' role='button'>Sign Up</Link>
                        
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
