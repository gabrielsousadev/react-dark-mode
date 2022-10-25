import React from "react";
import "./App.css";
import useLocalStorage from "use-local-storage";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

function App() {

  const [theme, setTheme] = useLocalStorage(
    "theme" ? "dark" : "light",
    "light"
  );
  
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <FaGoogle className="icon" />
            <FaFacebookSquare className="icon" />
            <FaLinkedin className="icon" />
            <FaTwitterSquare className="icon" />
            <FaApple className="icon" />
          </div>
          <p className="divider">
            <span>Or</span>
          </p>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="remember">
              <input type="checkbox" />
              <p>remember me</p>
            </div>
            <button>Login</button>
          </form>
          <div className="bottom">
            <p>Forget your password?</p>
            <a href="#">Reset Password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          <BsFillSunFill className="theme-icon" />
          {theme === "dark" && (
            <FaToggleOn className="icon" onClick={switchTheme} />
          )}
          {theme === "light" && (
            <FaToggleOff className="icon" onClick={switchTheme} />
          )}
          <BsFillMoonFill className="theme-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
