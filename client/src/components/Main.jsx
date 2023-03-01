import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom';

const Main = () => {
    return (
        <div className='logout'>
            <h1 style={{ textAlign: "center" }}>Congratulation!!!!!!!!!!! You Have sucessfully completed your authentication process....</h1>
            <Link to="/"><button className='logout-btn'>Logout</button></Link>
        </div>
    )
}

export default Main