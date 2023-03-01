import React, { useState } from 'react'
import './signup.css'
import { Link,useNavigate } from 'react-router-dom'

const Register = () => {

   

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');


    const postData = async (e) => {

        e.preventDefault();

        const response = await fetch(`${process.env.REACT_APP_URL}/register`,{

        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:email,
          name:name,
          username:username,
          password:password
        })
      })

        const json = await response.json();
        if(json.msg === "User registeres sucessfully"){
          navigate("/signin")
        }
        else{
            window.alert(json.msg)
        }

    }


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Welcome to my register page</h1>

            <div className="signUp">
                <div className="form-container">
                    <div className="form">
                        <p className="loginPara">
                            Sign up here for next steps
                        </p>
                        <div>
                            <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div>
                            <input type="text" name="name" id="name" placeholder="Full Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => { setusername(e.target.value) }}
                            />
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
                            style={{ fontSize: "12px", margin: "3px 0px" }}
                        >
                            Already register
                            Go to <Link to="/signin">login</Link>
                        </p>
                        <input className='submit' type="submit" id="submit-btn" onClick={postData} />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Register