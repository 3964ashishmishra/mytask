import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-div'>    
        <h1>This is home  page</h1>
        <div className='buttons'>
          <Link to="/register"><button>Signup</button></Link>
          <Link to="/signin"><button>Signin</button></Link>
        
        </div>
    </div>
  )
}

export default Home