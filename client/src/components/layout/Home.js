import React from "react"
import { Link } from "react-router-dom"

function Home (){
    return (
        <section className="home">
            <div className="dark-overlay">
                <div className="home-inner">
                    <h1 className="x1">Mern Application</h1>
                    <p className="cta">Learning FullStack development using MERN</p>
                    <div className="buttons">
                        <Link to="/register" className="btn btn-primary">Login</Link>
                        <Link to="/login" className="btn btn-primary">Register</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home