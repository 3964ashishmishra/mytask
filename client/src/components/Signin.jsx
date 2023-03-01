import React, { useState } from 'react'
import './signup.css'
import { Link,useNavigate } from 'react-router-dom';


const Signin = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signinUser = async (e) =>{

        e.preventDefault();

        const res = await fetch("http://localhost:8000/login",{

            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })

        const response = await res.json();

        if(response.msg === "User login sucessfully"){
            window.alert("User login sucessfully");
            localStorage.setItem("jwt-token",response.jwtToken);
            navigate("/main");
        }else{
            window.alert("Please enter fields correctly");
        }
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Welcome to my register page</h1>

            <div className="signUp">
                <div className="form-container">
                    <div className="form">
                        <p className="loginPara">
                            Sigin up here for next steps
                        </p>
                        <div>
                            <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>
                        <p
                            className="loginPara"
                            style={{ marginLeft: "30px" }}
                        >
                            Not register yet <Link to="/register"> register!</Link> first
                        </p>
                        <input className='submit' type="submit" id="submit-btn" onClick={signinUser} />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Signin