import React from 'react';
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
import '../../styles/components/userActivity.css';
import { formatUserActivity } from '../../services/FormatData';

function UserActivity({ userActivity }) {
  if (
    !userActivity ||
    !userActivity.sessions ||
    userActivity.sessions.length === 0
  ) {
    return <div>Chargement en cours...</div>;
  }

  // Formater les données d'activité utilisateur en utilisant la fonction de formatage
  const formattedUserActivity = formatUserActivity(userActivity);

  function CustomToolTip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="StyledToolTip">
          <p>{payload[0].value + 'kg'}</p>
          <p>{payload[1].value + 'Kcal'}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="activityContainerStyles">
      <h2 className="titleActivity">Activité quotidienne</h2>
      <div className="ActivityContainer">
        <ResponsiveContainer width="96%" height={280}>
          <BarChart
            data={formattedUserActivity.sessions}
            barSize={7}
            barGap={8}
          >
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
    </div>
  );
}

export default UserActivity;
