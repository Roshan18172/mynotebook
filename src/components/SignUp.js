import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    let navigate = useNavigate();
    const [credential, setCredential] = useState({name:"", email: "", password: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const {name,email,password}=credential;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name:credential.name, email: credential.email, password: credential.password })
        });

        const json = await response.json();
        console.log(json)

        if (json.success) {
            // save token and redirect
            localStorage.setItem("token", json.authToken);
            navigate("/home");
        } else {
            alert("User Already Exits.");
        }
    };
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    };
    return (
        <div className="container-fluid ">
            <div className="container signup my-3">
                <div className="card m-auto align-item-center" style={{ width: "28rem" }}>
                    <div className="card-header"> Sign Up </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name='name' onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name='email' onChange={onChange}
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required />
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
