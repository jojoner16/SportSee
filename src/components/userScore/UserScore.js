import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import '../../styles/components/userScore.css';
import { formatUserScore } from '../../services/FormatData';

function UserScore({ userId, score, todayScore }) {
  // Utilisation de la fonction formatUserScore pour formater les données
  const formattedUserScore = formatUserScore(userId, todayScore, score);

  if (!formattedUserScore || formattedUserScore.length === 0) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="userScoreContainer">
      <h2 className="userScoreTitle">Score</h2>
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="0%"
          outerRadius="0%"
          data={formattedUserScore}
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
      <div className="percentContainer">
        <p className="percent">{(todayScore || score) * 100}%</p>
        <p className="grayText">de votre</p>
        <p className="grayText">objectif</p>
      </div>
    </div>
  );
}

export default UserScore;
