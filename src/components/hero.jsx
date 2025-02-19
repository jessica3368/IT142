import React from 'react';
import { Link } from "react-router-dom";
import Profile from '../assets/conan.png';

const Hero = () => {
  return (
    <div className='main-container'>
        <nav>
          <ul className='l-ul'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
          </ul>
          <ul className='r-ul'>
            <li><Link>Contact</Link></li>
            <li><Link>Work</Link></li>
          </ul>
        </nav>

        <div className='profile'>
            <img src={Profile} alt="" />
        </div>

        <div className='home-text'>
          <h1>Hello, <span className='italic'>I am Jessica!</span></h1>
          <p>Every challenge is a chance to face them with curiosity and heart.</p>
          <p className='hire-me'><Link>Hire me</Link></p>
        </div>
    </div>
  );
}

export default Hero;
