import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="container-fluid ">
            <div className="container signup my-5 ">
                <div className="card m-auto align-item-center" style={{width: "28rem"}}>
                    <div className="card-header"> Sign Up </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name='name' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name='email'
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name='password' />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer"> Already Have an Account ? <Link to="/login"
                        className="text-decoration-none">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
