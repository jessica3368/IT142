import React from 'react';
import C1 from '../assets/Cert4.jpg';
import C2 from '../assets/Cert1.jpg';
import C3 from '../assets/Cert2.jpg';
import C4 from '../assets/Cert3.jpg';

export function Certificates() {
  const previewImage = (e, imgSrc) => {
    e.preventDefault();
    window.open(imgSrc || 'https://via.placeholder.com/80x60', '_blank');
  };

  const defaultImage = 'default-image.jpg';

  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div className="certificates-timeline">
        <div className="certificate-card card">
          <a href="../assets/Cert4.jpg" target="_blank" onClick={(e) => previewImage(e, defaultImage)}>
            <div className="certificate-image-container">
              <div className="certificate-image">
                <img src={C1} alt="Graphic Design Certificate" />
              </div>
            </div>
          </a>
          <div className="certificate-content">
            <h3>Responsive Web Design            </h3>
            <div className="company">freeCodeCamp</div>
            <div className="date">May 2025</div>
            <p>The Responsive Web Design course taught me to create adaptable websites using flexible layouts and media queries. Hands-on practice improved my front-end skills and boosted my confidence in mobile-first design.</p>
          </div>
        </div>
        <div className="certificate-card card">
          <a href="https://via.placeholder.com/80x60?text=UI+UX+Cert" target="_blank" onClick={(e) => previewImage(e, defaultImage)}>
            <div className="certificate-image-container">
              <div className="certificate-image">
                <img src={C1} alt="UI/UX Certificate" />
              </div>
            </div>
          </a>
          <div className="certificate-content">
            <h3>RAG Course for Beginners</h3>
            <div className="company">SimplIlearn SkillUp</div>
            <div className="date">April 2025</div>
            <p>Offered a practical introduction to Retrieval-Augmented Generation, combining retrieval with generative AI. Hands-on examples simplified complex concepts and inspired me to explore advanced RAG applications.</p>
          </div>
        </div>
        <div className="certificate-card card">
          <a href="https://via.placeholder.com/80x60?text=Digital+Illustration+Cert" target="_blank" onClick={(e) => previewImage(e, defaultImage)}>
            <div className="certificate-image-container">
              <div className="certificate-image">
                <img src={C2} alt="Digital Illustration Certificate" />
              </div>
            </div>
          </a>
          <div className="certificate-content">
            <h3>AI Agents for Beginners            </h3>
            <div className="company">SimplIlearn SkillUp</div>
            <div className="date">April 2025</div>
            <p>The AI Agents for Beginners course taught me how autonomous agents operate and make decisions. Clear examples enhanced my understanding and boosted my confidence in applying these principles to real-world tasks.</p>
          </div>
        </div>
        <div className="certificate-card card">
          <a href="https://via.placeholder.com/80x60?text=Digital+Illustration+Cert" target="_blank" onClick={(e) => previewImage(e, defaultImage)}>
            <div className="certificate-image-container">
              <div className="certificate-image">
                <img src={C3} alt="Digital Illustration Certificate" />
              </div>
            </div>
          </a>
          <div className="certificate-content">
            <h3>Generative AI for Beginners</h3>
            <div className="company">SimplIlearn SkillUp</div>
            <div className="date">April 2025</div>
            <p>A course introduced core principles of AI that creates content like text and images. Real-world examples helped me understand how models like GPT function, sparking my interest in exploring generative AI applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}