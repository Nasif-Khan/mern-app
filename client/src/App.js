import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";

function App (){
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                </Routes>
                <section className="container">
                    <Routes>
                        <Route path="/login" element={ <Login/> }/>
                        <Route path="/register" element={ <Register/> }/>
                    </Routes>
                </section>
            </div>
        </Router>
    )
}

export default App
