import React from 'react';
import './Header.css'; // Assuming you will create a separate CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="#"><img src="src/assets/logo.png" alt="Hotel Paraiso" /></a>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#reservas">Reservas</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;