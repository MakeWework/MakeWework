import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const Login = () => {
    return(
        <div className="wrapper">
          <Navbar/>
            <form action="">
                <h1>Hello !</h1>
                <h2>Come Make We Work</h2>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="password" required />
                </div>
                <div className="forgot-password">
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
