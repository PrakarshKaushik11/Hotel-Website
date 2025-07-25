// src/components/GallerySection.js
import React, { useState } from 'react';
import './GallerySection.css';

const images = [
  { src: '/images/gallery1.jpg', caption: 'Luxurious Room' },
  { src: '/images/gallery2.jpg', caption: 'Scenic View' },
  { src: '/images/gallery3.jpg', caption: 'Elegant Lobby' },
  { src: '/images/gallery4.jpg', caption: 'Swimming Pool' },
  { src: '/images/gallery5.jpg', caption: 'Fine Dining' },
  { src: '/images/gallery6.jpg', caption: 'Relaxing Spa' },
  { src: '/images/gallery7.jpg', caption: 'Modern Suite' },
  { src: '/images/gallery8.jpg', caption: 'Garden Path' },
  { src: '/images/gallery9.jpg', caption: 'Rooftop Lounge' },
  { src: '/images/gallery10.jpg', caption: 'Cozy Cafe' },
  { src: '/images/gallery11.jpg', caption: 'Conference Room' },
  { src: '/images/gallery12.jpg', caption: 'Fireplace Corner' },
];


const GallerySection = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div className="gallery-item" key={idx} onClick={() => setLightboxImage(img)}>
            <img src={img.src} alt={img.caption} className="gallery-img" />
            <div className="gallery-caption">{img.caption}</div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage.src} alt={lightboxImage.caption} />
          <p>{lightboxImage.caption}</p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
