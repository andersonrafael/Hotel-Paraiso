import React from 'react';
import './Features.css'; // Assuming you will create a corresponding CSS file for styles

const Features = () => {
    const featuresList = [
        {
            icon: 'location_on',
            title: 'Localização Privilegiada',
            description: 'Estamos localizados entre a Mata Atlântica e as mais belas praias do sul da Bahia.'
        },
        {
            icon: 'card_giftcard',
            title: 'Pacotes Especiais',
            description: 'Oferecemos pacotes personalizados para tornar sua estadia ainda mais especial.'
        },
        {
            icon: 'home',
            title: 'Acomodações Confortáveis',
            description: 'Nossas suítes e chalés são equipados com tudo que você precisa para relaxar.'
        },
        {
            icon: 'spa',
            title: 'Experiências Únicas',
            description: 'Desfrute de atividades como trilhas, passeios de barco e muito mais.'
        }
    ];

    return (
        <section className="features">
            <h2>Nossos Diferenciais</h2>
            <div className="features-grid">
                {featuresList.map((feature, index) => (
                    <div className="feature-item" key={index}>
                        <i className="material-icons">{feature.icon}</i>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;