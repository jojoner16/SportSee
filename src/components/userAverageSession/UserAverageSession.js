import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import '../../styles/components/userAverageSession.css';
import { formatUserAverageSessions } from '../../services/FormatData';

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
        <div className="customToolTip">
          <p>{payload[0].value + ' min'}</p>
        </div>
      );
    }
    return null;
  }

  if (!userAverageSessions || !userAverageSessions.sessions) {
    return <div>Chargement en cours...</div>;
  }

  // Formater les données de session moyenne en utilisant la fonction de formatage
  const formattedUserAverageSessions =
    formatUserAverageSessions(userAverageSessions);

  if (
    !formattedUserAverageSessions ||
    !formattedUserAverageSessions.sessions ||
    formattedUserAverageSessions.sessions.length === 0
  ) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="averageSessionContainer">
      <h2 className="averageSessionTitle">
        Durée moyenne des <br />
        sessions
      </h2>
      <ResponsiveContainer>
        <LineChart data={formattedUserAverageSessions.sessions}>
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
