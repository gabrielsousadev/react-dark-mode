import useLocalStorage from "use-local-storage";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";




function Container() 
{
    return (
        <div className="login">
            <h1>Login</h1>
            <div className="container">
                <div className="top">
                    <FaGoogle/>
                    <FaFacebookSquare/>
                    <FaLinkedin/>
                    <FaTwitterSquare/>
                    <FaApple/>
                </div>
                <p className="divider"><span>Or</span></p>
                <form>
                    <label>E-mail</label>
                    <input type="email" placeholder="Enter your email" />
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                    <div className="remember">
                        <input type="checkbox"/>
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
                <h2>Light theme</h2>
                <FaToggleOn/>
            </div>
        </div>
    )
}

export default Container