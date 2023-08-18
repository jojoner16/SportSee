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

const averageSessionContainerStyle = {
  backgroundColor: '#FF0000',
  borderRadius: '5px',
  width: '258px',
  height: '263px',
};

const Title = styled.h2`
  width: 9.1875rem;
  height: 3rem;
  margin: 1.4rem;
  position: absolute;
  color: #ffffff;
  opacity: 0.504;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

const StyledToolTip = styled.div`
  width: 2.4375rem;
  height: 1.5625rem;
  background-color: white;

  p {
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0rem;
    text-align: center;
  }
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
        <StyledToolTip>
          <p>{payload[0].value + ' min'}</p>
        </StyledToolTip>
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
      <ResponsiveContainer>
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
            padding={{ left: 12, right: 12 }}
            dataKey="day"
            axisLine={false}
            tickLine={false}
            includeHidden={true}
            tick={{
              fill: 'rgba(255,255,255,0.5)',
              fontSize: '0.75rem',
            }}
            tickFormatter={formatLabel}
          />
          <Tooltip content={CustomToolTip} cursor={false} />
          <YAxis hide domain={['dataMin-20', 'dataMax+60']} />
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
      </ResponsiveContainer>
    </div>
  );
}

export default UserAverageSessions;
