import React from "react";
import "./Gallery.css"; // Make sure to create this CSS file

const images = [
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/801x600",
  "https://source.unsplash.com/random/800x601",
  "https://source.unsplash.com/random/802x600",
  "https://source.unsplash.com/random/800x602",
  "https://source.unsplash.com/random/803x600",
  "https://source.unsplash.com/random/800x603",
  "https://source.unsplash.com/random/804x600",
  "https://source.unsplash.com/random/800x604",
];

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        <h1 className="gallery-title">Our Visit</h1>
        
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <div className="image-container">
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="gallery-image"
                />
              </div>
              <div className="image-caption">
                <p>Image {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;