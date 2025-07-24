import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Features />
            <Gallery />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default App;