import React from 'react';
import './Gallery.css'; // Assuming you will create a corresponding CSS file for styling

const Gallery = () => {
    const images = [
        'img/gallery1.jpg',
        'img/gallery2.jpg',
        'img/gallery3.jpg',
        'img/gallery4.jpg',
        'img/gallery5.jpg',
        'img/gallery6.jpg',
    ];

    return (
        <section className="gallery">
            <h3>Galeria</h3>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image} alt={`Gallery image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;