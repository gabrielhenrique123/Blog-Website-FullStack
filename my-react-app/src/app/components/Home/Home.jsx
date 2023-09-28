import React from 'react';
import Navbar from "../Navbar/NavBar.jsx";
import Post from '../../pages/Posts/Post';
import Support from '../../pages/Support/Support.jsx';
import Register from '../../pages/Register/Register.jsx';

function Home() {
  return (
    <div className='Home'>
        <Navbar/>
    <Register/>
        
    </div>
  )
}

export default Home