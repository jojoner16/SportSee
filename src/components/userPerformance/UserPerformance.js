import React from 'react';
// import styled from 'styled-components';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
  Text,
} from 'recharts';

const performanceContainerStyle = {
  backgroundColor: '#282D30',
  borderRadius: '5px',
  width: '258px',
  height: '263px',
};

function UserPerformance({ data }) {
  if (!data || !data.kind || !data.data) {
    return null; // Afficher un contenu vide ou un message de chargement
  }
  const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
    const formatLabel = (value) => {
      if (value === 'Energy') return 'Energie';
      if (value === 'Strength') return 'Force';
      if (value === 'Speed') return 'Vitesse';
      if (value === 'Intensity') return 'Intensité';
      return value;
    };

    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 10}
        x={x + (x - cx) / 100}
        fill="#FFFFFF"
        fontSize="0.75rem"
      >
        {formatLabel(
          data.kind[payload.value].charAt(0).toUpperCase() +
            data.kind[payload.value].slice(1)
        )}
      </Text>
    );
  };

  return (
    <div style={performanceContainerStyle}>
      <ResponsiveContainer>
        <RadarChart outerRadius={90} data={[...data.data].reverse()}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={(props) => renderPolarAngleAxis(props)}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserPerformance;
