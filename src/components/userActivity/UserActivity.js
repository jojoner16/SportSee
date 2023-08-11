import React from 'react';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Title = styled.h2`
  position: absolute;
  color: #20253a;
  font-size: 0.9375rem;
  font-weight: 500;
`;

const Tooltips = styled.div`
  display: block;
  padding: 0.25rem 0.4375rem;
  background-color: red;
  color: white;
  font-size: 0.6875rem;
  line-height: 1.5rem;
  text-align: center;
`;

function UserActivity({ userActivity }) {
  if (!userActivity) {
    return <div>Chargement en cours...</div>;
  }

  function CustomToolTip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <Tooltips>
          <p>{payload[0].value + 'kg'}</p>
          <p>{payload[1].value + 'Kcal'}</p>
        </Tooltips>
      );
    }
    return null;
  }

  return (
    <div>
      <Title>Activité quotidienne</Title>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={userActivity.sessions} barSize={7} barGap={8}>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: '#9B9EAC' }}
            tickLine={false}
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={16}
            tickFormatter={(day) => new Date(day).getDate()}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tickMargin={30}
            tick={{ fill: '#9B9EAC' }}
            tickLine={false}
            axisLine={false}
            domain={['dataMin-2', 'dataMax+1']}
            tickCount={3}
          />
          <YAxis hide yAxisId="calories" />
          <Tooltip
            content={CustomToolTip}
            cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            yAxisId="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="10"
            height={80}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserActivity;
