import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  const [credential, setCredential] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    });

    const json = await response.json();
    console.log(json)

    if (json.success) {
      // save token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="container login my-5">
      <div className="card m-auto align-item-center" style={{ width: "28rem" }}>
        <div className="card-header">Login</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                onChange={onChange}
                value={credential.email}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                onChange={onChange}
                value={credential.password}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
        <div className="card-footer">
          Don't Have an Account? <Link to="/signup" className="text-decoration-none">Register Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
