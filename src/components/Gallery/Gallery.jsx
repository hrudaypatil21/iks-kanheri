import React from "react";
import "./Gallery.css"; // Make sure to create this CSS file

const images = [
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.08_238ed3ae.jpg",
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.11_cd7b9041.jpg",
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.10_afeb0531.jpg",
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.19_80ae6f7f.jpg",
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.19_a027fa99.jpg",
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.38_b458b6b8.jpg",
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.38_40b04986.jpg",
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.37_c5e94580.jpg",
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.36_89232bd2.jpg",
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.23_43b6a669.jpg", 
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.21_f251a106.jpg",
  "src/gallery/WhatsApp Image 2025-03-26 at 12.02.22_186296bb.jpg"
  
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;