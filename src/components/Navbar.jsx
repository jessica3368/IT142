import React from 'react';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <i className="fas fa-bars burger" onClick={() => document.querySelector('.nav-menu').classList.toggle('active')}></i>
        <ul className="nav-menu">
          <li><a href="#home" onClick={() => document.querySelector('.nav-menu').classList.remove('active')}>Home</a></li>
          <li><a href="#about" onClick={() => document.querySelector('.nav-menu').classList.remove('active')}>About</a></li>
          <li><a href="#projects" onClick={() => document.querySelector('.nav-menu').classList.remove('active')}>Projects</a></li>
          <li><a href="#certificates" onClick={() => document.querySelector('.nav-menu').classList.remove('active')}>Certificates</a></li>
          <li><a href="#experience" onClick={() => document.querySelector('.nav-menu').classList.remove('active')}>Experience</a></li>
          <li><a href="#blog" onClick={() => document.querySelector('.nav-menu').classList.remove('active')}>Blog</a></li>
          <li><a href="#contact" onClick={() => document.querySelector('.nav-menu').classList.remove('active')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}