import React from 'react';
import iconMeditation from '../../assets/iconMeditation.svg';
import iconBike from '../../assets/iconBike.svg';
import iconSwiming from '../../assets/iconSwiming.svg';
import iconDumbBell from '../../assets/iconDumbBell.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 117px;
  height: 100vh;
  background: #020203;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 64px;
  position: absolute;
  top: 30%;
  left: 26px;
  a {
    display: flex;
    height: 64px;
    width: 64px;
    margin-bottom: 20px;
  }
`;

const NavText = styled.p`
  writing-mode: vertical-lr;
  text-orientation: mixed;
  transform: rotate(180deg);
  position: absolute;
  bottom: 59px;
  left: 42px;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: white;
  margin: auto;
`;

const NavLinkStyled = styled(NavLink)`
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

function SideBar() {
  return (
    <Container>
      <Nav>
        <Wrapper>
          <NavLinkStyled to="#">
            <img src={iconMeditation} alt="Meditation" />
          </NavLinkStyled>
          <NavLinkStyled to="#">
            <img src={iconSwiming} alt="Swiming" />
          </NavLinkStyled>
          <NavLinkStyled to="#">
            <img src={iconBike} alt="Bike" />
          </NavLinkStyled>
          <NavLinkStyled to="#">
            <img src={iconDumbBell} alt="Dumb-Bell" />
          </NavLinkStyled>
        </Wrapper>
        <NavText>©Copyright, SportSee 2020</NavText>
      </Nav>
    </Container>
  );
}

export default SideBar;
