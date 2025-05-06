import React from 'react';
import Profile from '../assets/Picture4.jpg';

export function Home() {
  return (
    <section id="home">
      <div className="profile-pic animate">
        <img src={Profile} alt="" />
      </div>
      <h1 className="animate">Hi, I am Jessica!</h1>
      <p className="animate">Every challenge is a chance to face them with curiosity and heart.</p>
      <a href="#contact" className="hire-btn animate">Hire Me</a>
    </section>
  );
}