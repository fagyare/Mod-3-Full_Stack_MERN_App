import { Link } from "react-router-dom";
import { useState } from "react";


function Home({ setUser }) {

    

    return (
        <div className="home">
            <h1>HOME</h1>

{/* // can add an image to link to register/login form  */}
            <h3>Register </h3>  
            <li className="home-nav">
            <Link to="/register">Register</Link>
            </li>
            
            <h3>Login </h3>  
            <li className="home-nav">
            <Link to="/login">Login</Link>
            </li>


           
        </div>

    )

}

export default Home;

