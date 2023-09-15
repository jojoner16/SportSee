import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  margin: 9rem 0rem 1rem 0rem;
  weight: 500;
  font-size: 3rem;
`;

const RedText = styled.span`
  color: red;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

function UserProfil({ firstName }) {
  return (
    <div>
      <Title>
        Bonjour <RedText>{firstName}</RedText>
      </Title>
      <Subtitle>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </Subtitle>
    </div>
  );
}

export default UserProfil;
