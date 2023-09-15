import React from 'react';
import iconMeditation from '../../assets/iconMeditation.svg';
import iconBike from '../../assets/iconBike.svg';
import iconSwiming from '../../assets/iconSwiming.svg';
import iconDumbBell from '../../assets/iconDumbBell.svg';
import { NavLink } from 'react-router-dom';
import '../../styles/components/sideBar.css'

function SideBar() {
  return (
    <div className="container">
      <div className="nav">
        <div className="wrapper">
          <NavLink to="#" className="navLink">
            <img src={iconMeditation} alt="Meditation" />
          </NavLink>
          <NavLink to="#" className="navLink">
            <img src={iconSwiming} alt="Swimming" />
          </NavLink>
          <NavLink to="#" className="navLink">
            <img src={iconBike} alt="Bike" />
          </NavLink>
          <NavLink to="#" className="navLink">
            <img src={iconDumbBell} alt="Dumb-Bell" />
          </NavLink>
        </div>
        <p className="navText">© Copyright, SportSee 2020</p>
      </div>
    </div>
  );
}

export default SideBar;
