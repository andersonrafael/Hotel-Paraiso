import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setSuccess(true);
            setError('');
            // Here you can add the logic to send the email to your server
            setEmail('');
        } else {
            setError('Por favor, insira um endereço de e-mail válido.');
            setSuccess(false);
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <section className="newsletter">
            <h3>Newsletter</h3>
            <p>Assine nossa newsletter para se manter atualizado com nossos serviços e a programação de novas culturas.</p>
            <hr />
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Cadastrar</button>
            </form>
            {success && <p className="success-message">Obrigado por se inscrever!</p>}
            {error && <p className="error-message">{error}</p>}
        </section>
    );
};

export default Newsletter;