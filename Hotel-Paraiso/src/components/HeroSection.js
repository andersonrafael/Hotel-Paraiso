import React from 'react';
import './HeroSection.css'; // Assuming you will create a separate CSS file for styles

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Conheça este paraíso chamado Itacaré</h1>
                <h3>"Aconchego, conforto, simpatia e alto astral"</h3>
                <a className="btn" href="#reservas">Saiba mais</a>
            </div>
        </section>
    );
};

export default HeroSection;