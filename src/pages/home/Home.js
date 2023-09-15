import React from 'react';
import { NavLink } from 'react-router-dom';
import SideBar from '../../components/sideBar/SideBar';

function Home() {
  return (
    <main className="mainContainer">
      <SideBar />
      <h2 className="homeTitle">Selectionner un utilisateur</h2>
      <NavLink to="/user/12">👦 Karl </NavLink>
      <NavLink to="/user/18">👩 Cecilia </NavLink>
    </main>
  );
}

export default Home;
