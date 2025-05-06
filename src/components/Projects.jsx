import React from 'react';
import w1 from '../assets/w-1.jpg';
import w2 from '../assets/w-2.jpg';
import w3 from '../assets/w-3.jpg';
import w4 from '../assets/w-7.jpg';
import w5 from '../assets/w-6.jpg';

export function Projects() {
  const toggleDescription = (descId) => {
    const desc = document.getElementById(descId);
    const link = desc.nextElementSibling.querySelector('.read-more');
    desc.classList.toggle('expanded');
    link.textContent = desc.classList.contains('expanded') ? 'Read Less' : 'Read More';
  };

  const previewImage = (e, imgSrc) => {
    e.preventDefault();
    window.open(imgSrc || 'https://via.placeholder.com/350x200', '_blank');
  };

  const defaultImage = 'default-image.jpg';

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* Silent Rebellion */}
        <div className="project-card card">
          <div className="project-image-container">
            <div className="project-image">
              <img src={w1} alt="Silent Rebellion" />
            </div>
            <a href="#" className="img-overlay" onClick={(e) => previewImage(e, w1)}>
              <i className="fas fa-eye preview-icon"></i>
            </a>
          </div>
          <div className="project-content">
            <h3>Silent Rebellion</h3>
            <p id="desc-1">
              A bold black-and-white portrait blending punk style with surreal elements,
              featuring cryptic red symbols and sharp design lines that evoke rebellion and inner intensity.
            </p>
            <div className="project-links">
              <a className="read-more" onClick={() => toggleDescription('desc-1')}>Read More</a>
            </div>
          </div>
        </div>

        {/* WMSU Palaro */}
        <div className="project-card card">
          <div className="project-image-container">
            <div className="project-image">
              <img src={w2} alt="WMSU Palaro SY. 2023–2024" />
            </div>
            <a href="#" className="img-overlay" onClick={(e) => previewImage(e, w2)}>
              <i className="fas fa-eye preview-icon"></i>
            </a>
          </div>
          <div className="project-content">
            <h3>WMSU Palaro SY. 2023–2024</h3>
            <p id="desc-2">
              A vibrant sports collage celebrating the energy and spirit of Western Mindanao State University's athletic event,
              highlighting dynamic basketball moments and school pride.
            </p>
            <div className="project-links">
              <a className="read-more" onClick={() => toggleDescription('desc-2')}>Read More</a>
            </div>
          </div>
        </div>

        {/* Mental Health Seminar */}
        <div className="project-card card">
          <div className="project-image-container">
            <div className="project-image">
              <img src={w3} alt="Mental Health Awareness Seminar" />
            </div>
            <a href="#" className="img-overlay" onClick={(e) => previewImage(e, w3)}>
              <i className="fas fa-eye preview-icon"></i>
            </a>
          </div>
          <div className="project-content">
            <h3>Mental Health Awareness Seminar</h3>
            <p id="desc-3">
              An informative poster for Western Mindanao State University's College of Liberal Arts,
              promoting empathy, support, and education on mental health held on January 10, 2024.
            </p>
            <div className="project-links">
              <a className="read-more" onClick={() => toggleDescription('desc-3')}>Read More</a>
            </div>
          </div>
        </div>

        {/* To-Do List */}
        <div className="project-card card">
          <div className="project-image-container">
            <div className="project-image">
              <img src={w4} alt="To-Do List" />
            </div>
            <a href="https://schedto-do.netlify.app/" target="_blank" rel="noopener noreferrer" className="img-overlay">
              <i className="fas fa-eye preview-icon"></i>
            </a>
          </div>
          <div className="project-content">
            <h3>To-Do List</h3>
            <p id="desc-4">
              An efficient task management tool that lets users keep track of their daily responsibilities with ease—
              featuring task creation, status updates, and a clear, clutter-free interface to stay organized and on schedule.
            </p>
            <div className="project-links">
              <a className="read-more" onClick={() => toggleDescription('desc-4')}>Read More</a>
              <a href="https://github.com/jessica3368/todo-list" className="git-btn">Git Repo</a>
            </div>
          </div>
        </div>

        {/* Pokémon */}
        <div className="project-card card">
          <div className="project-image-container">
            <div className="project-image">
              <img src={w5} alt="Pokémon" />
            </div>
            <a href="https://pokemonbat.netlify.app/" target="_blank" rel="noopener noreferrer" className="img-overlay">
              <i className="fas fa-eye preview-icon"></i>
            </a>
          </div>
          <div className="project-content">
            <h3>Pokémon</h3>
            <p id="desc-5">
              A dynamic Pokémon app that uses the PokéAPI to let users create a custom team of six,
              simulate battles between selected Pokémon, mark favorites, and keep track of past battles for a fun and interactive experience.
            </p>
            <div className="project-links">
              <a className="read-more" onClick={() => toggleDescription('desc-5')}>Read More</a>
              <a href="https://github.com/jessica3368/pokemon" className="git-btn">Git Repo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
