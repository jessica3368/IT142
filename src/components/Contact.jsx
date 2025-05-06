import React from 'react';

export function Contact() {
  return (
    <section id="contact">
      <h2>Contacts</h2>
      <p className="subtitle">For any inquiries, please use my contact information directly.</p>
      <div className="contact-container">
        <div className="contact-box">
          <div className="icon-circle">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3>Location</h3>
          <p>Camino Nuevo, Zamboanga City, Zamboanga Del Sur, PH</p>
        </div>
        <div className="contact-box">
          <div className="icon-circle">
            <i className="fas fa-phone"></i>
          </div>
          <h3>Phone (Landline)</h3>
          <p>0991 775 2259</p>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/jessica-santos-89776b340/">
          <div className="social-icon">
            <i className="fab fa-linkedin"></i>
          </div>
        </a>
        <a href="https://github.com/jessica3368">
          <div className="social-icon">
            <i className="fab fa-github"></i>
          </div>
        </a>
        <a href="mailto:jessica.santos13235@gmail.com ">
          <div className="social-icon">
            <i className="fas fa-envelope"></i>
          </div>
        </a>
      </div>
    </section>
  );
}