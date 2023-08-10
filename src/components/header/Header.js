import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';

const Head = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  height: 91px;
  background: #020203;
  padding: 0 87px 0 29px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  img {
    width: 178px;
    margin-right: 150px;
    @media (max-width: 1025px) {
      margin-right: 70px;
    }
  }
`;
const Nav = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
    font-weight: 500;
    font-size: 24px;
    position: relative; /* Ajoutez une position relative */

    &:hover {
      color: red;
      transition: color 0.3s ease;
    }

    /* Pseudo-élément pour l'underline */
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: red;
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
      transform: scaleX(0);
      transform-origin: left;
    }

    /* Style pour :hover */
    &:hover::after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

function Header() {
  return (
    <Head>
      <img src={logo} alt="sportSee" aria-label="logo sportSee" />
      <Nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </Nav>
    </Head>
  );
}

export default Header;
