import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1240px;
  margin-left: 15rem;
  a {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    color: red;
  }
`;

const Title = styled.h2`
  margin: 4rem 0rem;
`;

function Home() {
  return (
    <Main>
      <Title>Selectionner un utilisateur</Title>
      <NavLink to="/user/12">👦 Karl </NavLink>
      <NavLink to="/user/18">👩 Cecilia </NavLink>
    </Main>
  );
}

export default Home;
