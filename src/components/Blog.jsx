import React from 'react';
import picture from '../assets/cover.jpg';

export function Blog() {
  const defaultImage = 'default-image.jpg'; // Replace with a local image path in your project

  return (
    <section id="blog">
      <h2>Blog</h2>
      <div className="blog-card card">
        <div className="blog-image-container">
          <div className="blog-image">
            <img src={picture} alt="Industry Visit and Educational Tour" />
          </div>
        </div>
        <div className="blog-content">
          <h3>Industry Visit and Educational Tour</h3>
          <p>As I look back on this journey, I’m filled with gratitude for all the people, places, and lessons that made it so meaningful. Thank you to the College of Computing Studies Batch 2025 for the wonderful experiences we've shared—each moment, from educational visits to shared laughter, has become a memory I’ll always treasure. A heartfelt thank you as well to our dedicated faculty for their guidance and support throughout the trip, and to my fellow students for making every day feel like an adventure with family. None of this would have been possible without DJM Travel and Tours, whose excellent service and coordination made our travels smooth, safe, and unforgettable. I’m genuinely grateful to be part of such an inspiring and memorable experience with such amazing people.</p>
          <a href="https://jessicablog.netlify.app/" className="read-more">Go to blog site</a>
        </div>
      </div>
    </section>
  );
}