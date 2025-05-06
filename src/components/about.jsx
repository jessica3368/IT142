import React from 'react';
import Profile from '../assets/Picture2.jpg';

export function About() {
  return (
    <section id="about">
      <div className="about-content">
        <div className="about-left">
          <div className="about-header">
            <div className="about-image animate">
                <img src={Profile} alt="" />
            </div>
            <div className="about-details animate">
              <p><strong>Name:</strong> Jessica Santos</p>
              <p><strong>Profile:</strong> Graphic Designer</p>
              <p><strong>Email:</strong> jessica.santos@gmail.com</p>
              <p><strong>Phone:</strong> (+63) 991 775 2259</p>
            </div>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill">
              <p className="animate">Adobe Photoshop <span className="percentage">90%</span></p>
              <div className="skill-bar"><div className="skill-bar-fill" style={{ '--final-width': '90%' }}></div></div>
            </div>
            <div className="skill">
              <p className="animate">Illustrator <span className="percentage">85%</span></p>
              <div className="skill-bar"><div className="skill-bar-fill" style={{ '--final-width': '85%' }}></div></div>
            </div>
            <div className="skill">
              <p className="animate">Procreate <span className="percentage">80%</span></p>
              <div className="skill-bar"><div className="skill-bar-fill" style={{ '--final-width': '80%' }}></div></div>
            </div>
            <div className="skill">
              <p className="animate">Figma <span className="percentage">75%</span></p>
              <div className="skill-bar"><div className="skill-bar-fill" style={{ '--final-width': '75%' }}></div></div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <h2>About me</h2>
          <p>I am an IT student with a strong interest in the intersection of technology and design. My academic background equips me with technical skills in programming and systems analysis, allowing me to understand the complexities of the digital world. I am committed to staying updated on the latest trends and advancements in the IT field.</p><br />
          <p>In addition to my studies, I am a passionate graphic designer. I enjoy creating visually appealing designs that communicate ideas effectively. Whether it’s through digital art, branding, or web design, I strive to blend aesthetics with functionality, ensuring my work resonates with the intended audience.</p><br />
          <p>I merge IT and graphic design to create impactful projects that inspire. I'm eager to collaborate and learn from others in both fields.</p>
        </div>
      </div>
    </section>
  );
}