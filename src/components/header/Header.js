import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../../styles/components/header.css';

function Header() {
  return (
    <div className="Head">
      <img src={logo} alt="sportSee" aria-label="logo sportSee" />
      <nav className="Nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </nav>
    </div>
  );
}

export default Header;
