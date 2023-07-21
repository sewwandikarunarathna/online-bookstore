import React, {useState} from 'react';

import './Signup.css';
import Axios from 'axios';




function Signup() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const signup = ()=> {
        Axios.post('http://localhost:3001/signup', {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        })

    }
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            
            <input type="text" placeholder="Username..." onChange = {(e) => {
                setUsernameReg(e.target.value);
            }}/>
            
            <input type="password" placeholder="Password..." onChange = {(e) => {
                setPasswordReg(e.target.value);
            }}/>
            <button onClick= {signup}>SignUp</button>
        </div>
    )
}

export default Signup;

