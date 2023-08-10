// User.js
import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../../components/userProfil/UserProfil';
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

function User() {
  const { userId } = useParams(); // Récupère l'ID de l'utilisateur depuis les paramètres d'URL

  return (
    <Main>
      <UserProfile userId={parseInt(userId)} />
    </Main>
  );
}

export default User;
