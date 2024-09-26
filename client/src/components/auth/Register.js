import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confPass: ""
    })

    const {name, email, password, confPass} = formData

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault()
        if(password !== confPass) {
            console.log("Password do not match")
        }
        else{
            console.log(formData)
        }
    }

    

    return (
        <div>
            <h1 className="large text-primary">Register</h1>
            <p className="cta"><i className="fa-solid fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input name="name" type="text" placeholder="Name" value={name} onChange={e => onChange(e)} required></input>
                </div>
                <div className="form-group">
                    <input name="email" type="text" placeholder="Email" value={email} onChange={e =>onChange(e)} required></input>
                </div>
                <div className="form-group">
                    <input name="password" type="password" placeholder="Password" value={password} onChange={e => onChange(e)} required></input>
                </div>
                <div className="form-group">
                    <input name="confPass" type="password" placeholder="Confirm Password" value={confPass} onChange={e => onChange(e)} required></input>
                </div>
                <input type="submit" className="btn btn-primary" value="Register"></input>
            </form>
            <p>
                Already have an account? <Link to="/login">Log In</Link>
            </p>
        </div>
    )
}

export default Register