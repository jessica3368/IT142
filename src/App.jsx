import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/about';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Experience } from './components/Experience';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.id === 'home') {
            entry.target.querySelectorAll('.animate').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 200);
            });
          } else if (entry.target.id === 'about') {
            entry.target.querySelectorAll('.animate').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 200);
            });
          } else if (entry.target.id === 'projects' || entry.target.id === 'certificates') {
            entry.target.querySelectorAll('.card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          } else if (entry.target.id === 'experience') {
            entry.target.querySelectorAll('.experience-card').forEach((el) => el.classList.add('visible'));
          } else if (entry.target.id === 'contact') {
            entry.target.querySelectorAll('.contact-box, .social-links a').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 200);
            });
          } else if (entry.target.id === 'blog') {
            entry.target.querySelector('.blog-card').classList.add('visible');
          }
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;