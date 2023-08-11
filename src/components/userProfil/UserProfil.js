import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

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

function UserProfil({ firstName }) {
  return (
    <div>
      <div>
        <Title>
          Bonjour <RedText>{firstName}</RedText>
        </Title>
        <Subtitle>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </Subtitle>
      </div>

      <div>
        <h2>Activité quotidienne</h2>
        <LineChart width={500} height={300}>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="kilogram"
            name="Kilogram"
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="calories"
            name="Calories"
            stroke="#82ca9d"
          />
        </LineChart>
      </div>
    </div>
  );
}

export default UserProfil;
