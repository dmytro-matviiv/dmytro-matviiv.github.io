import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    // Закриває бургер-меню при скролі
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuActive) {
                setIsMenuActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuActive]);

    return (
        <header className="header">
            {/* Логотип */}
            <a href="/" className="logo">
                <img src={logoImg} alt="Logo" className="logo-img" />
                Silk & Skin
            </a>

            {/* Бургер-меню */}
            <div 
                className={`burger-menu ${isMenuActive ? 'active' : ''}`} 
                onClick={toggleMenu}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Навігаційне меню */}
            <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
                <a href="#whywe">ЧОМУ САМЕ МИ</a>
                <a href="#roztyazhki">РОЗТЯЖКИ</a>
                <a href="#shram">ШРАМИ/РУБЦІ</a>
                <a href="#holova">ГОЛОВА/ОБЛИЧЧЯ</a>
                <a href="#contacts">КОНТАКТИ</a>
            </nav>
        </header>
    );
};

export default Navbar;
