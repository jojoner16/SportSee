import React from 'react';
import styled from 'styled-components';
// import getUserData from '../../services/GetData';

const Title = styled.h2`
  margin: 4rem 0rem 1rem 0rem;
  weight: 500;
  font-size: 3rem;
`;

const RedText = styled.span`
  color: red;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 4rem;
`;

function UserData({ userData }) {
  return (
    <div>
      <Title>
        Bonjour <RedText>{userData}</RedText>
      </Title>
      <Subtitle>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </Subtitle>
    </div>
  );
}

export default UserData;
