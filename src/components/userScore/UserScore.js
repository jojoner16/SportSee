import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const userScoreContainer = {
  borderRadius: '5px',
  width: '258px',
  height: '263px',
  backgroundColor: '#fbfbfb',
};

const percent = {
  color: '#282d30',
  fontSize: '1.625rem',
  fontWeight: '700',
};

const percentContainer = {
  position: 'relative',
  textAlign: 'center',
  top: '-10.6rem',
};

const Title = styled.h2`
  position: absolute;
  margin: 1.4rem;
  color: #20253a;
  font-size: 0.9375rem;
  font-weight: 500;
`;

const grayText = {
  color: '#74798C',
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: '1.625rem',
};

function UserScore({ score, todayScore }) {
  console.log('todayScore:', todayScore);
  console.log('score:', score);
  const data = [{ name: 'score', value: todayScore || score || 0 }];

  return (
    <div style={userScoreContainer}>
      <Title>Score</Title>
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="0%"
          outerRadius="0%"
          data={data}
          startAngle={90}
          endAngle={360 + 90}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={170}
            fill="#FFF"
            isAnimationActive={false}
          />
          <RadialBar
            dataKey="value"
            barSize={10}
            cornerRadius={100}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div style={percentContainer}>
        <p style={percent}>{(todayScore || score) * 100}%</p>
        <p style={grayText}>de votre</p>
        <p style={grayText}>objectif</p>
      </div>
    </div>
  );
}

export default UserScore;
