import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
  Text,
} from 'recharts';
import '../../styles/components/userPerformance.css';
import { formatUserPerformance } from '../../services/FormatData';

function UserPerformance({ data }) {
  // Utilisation de la fonction de formatage
  const formattedData = formatUserPerformance(data);

  if (!formattedData || !formattedData.kind || !formattedData.data) {
    return <div>Chargement en cours...</div>;
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
          formattedData.kind[payload.value].charAt(0).toUpperCase() +
            formattedData.kind[payload.value].slice(1)
        )}
      </Text>
    );
  };

  return (
    <div className="performanceContainerStyle">
      <ResponsiveContainer>
        <RadarChart outerRadius={90} data={[...formattedData.data].reverse()}>
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
