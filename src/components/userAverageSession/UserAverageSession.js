import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

const RedBackgroundResponsiveContainer = styled(ResponsiveContainer)`
  background-color: red;
`;

const averageSessionContainerStyle = {
  backgroundColor: 'red',
  width: '258px',
  height: '263px',
  marginTop: '-18rem',
};

const Title = styled.h2`
  width: 9.1875rem;
  height: 3rem;
  position: absolute;
  color: #ffffff;
  opacity: 0.504;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

function UserAverageSessions({ userAverageSessions }) {
  const formatLabel = (value) => {
    if (value === 1) return 'L';
    if (value === 2) return 'M';
    if (value === 3) return 'M';
    if (value === 4) return 'J';
    if (value === 5) return 'V';
    if (value === 6) return 'S';
    if (value === 7) return 'D';
    return value;
  };

  function CustomToolTip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div>
          <p>{payload[0].value + ' min'}</p>
        </div>
      );
    }
    return null;
  }

  if (!userAverageSessions || !userAverageSessions.sessions) {
    return null;
  }

  return (
    <div style={averageSessionContainerStyle}>
      <Title className="chartaverage-sessions-title">
        Durée moyenne des <br />
        sessions
      </Title>
      <RedBackgroundResponsiveContainer>
        <LineChart data={userAverageSessions.sessions}>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            activeDot={{
              stroke: '#FFF',
              strokeWidth: 4,
              r: 2,
            }}
            dot={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: 'rgba(255,255,255,0.6)',
              fontSize: '0.75rem',
            }}
            tickFormatter={formatLabel}
            // tickMargin={10}
          />
          <Tooltip content={CustomToolTip} cursor={false} />
          <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </RedBackgroundResponsiveContainer>
    </div>
  );
}

export default UserAverageSessions;
