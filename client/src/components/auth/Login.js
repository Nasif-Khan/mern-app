import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login () {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const {email, password} = formData

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("Logged In!!")
    }

    return (
        <div>
            <h1 className="large text-primary">Log In</h1>
            <p className="cta"><i className="fa-solid fa-user"></i> Login to Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input name="email" type="text" placeholder="Email" value={email} onChange={e =>onChange(e)} required></input>
                </div>
                <div className="form-group">
                    <input name="password" type="password" placeholder="Password" value={password} onChange={e => onChange(e)} required></input>
                </div>
                <input type="submit" className="btn btn-primary" value="Login"></input>
            </form>
            <p>
                Not registerd yet? <Link to="/login">Register Now</Link>
            </p>
        </div>
    )
}

export default Login