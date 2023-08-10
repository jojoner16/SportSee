import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetDataService from '../../services/GetData';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import styled from 'styled-components';

const Title = styled.h2`
  margin: 4rem 0rem;
`;

const RedText = styled.span`
  color: red;
`;

function UserProfile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userInfo = await GetDataService.getUserInfos(userId);
        const activity = await GetDataService.getUserActivity(userId);
        const averageSessions = await GetDataService.getUserAverageSessions(
          userId
        );
        const performance = await GetDataService.getUserPerformance(userId);

        setUserData(userInfo.data);
        setUserActivity(activity.data);
        setUserAverageSessions(averageSessions.data);
        setUserPerformance(performance.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (!userId) {
      // Utilisez les fonctions du service CallApiService ici
      setUserData(GetDataService.getUserInfos(12).data);
      setUserActivity(GetDataService.getUserActivity(12).data);
      setUserAverageSessions(GetDataService.getUserAverageSessions(12).data);
      setUserPerformance(GetDataService.getUserPerformance(12).data);
    } else {
      fetchData();
    }
  }, [userId]);

  // Affichage des données et des graphiques
  return (
    <div>
      {userData && (
        <div>
          <Title>
            Bonjour <RedText>{userData.userInfos.firstName}</RedText>
          </Title>
        </div>
      )}

      {userActivity && (
        <div>
          <h3>Activité sportive</h3>
          <LineChart width={400} height={300} data={userActivity.sessions}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="kilogram"
              name="Kilogrammes"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="calories"
              name="Calories brûlées"
              stroke="#82ca9d"
            />
          </LineChart>
        </div>
      )}

      {userAverageSessions && (
        <div>
          <h3>Sessions moyennes par jour</h3>
          {/* ... Ajoutez ici le code pour afficher les sessions moyennes ... */}
        </div>
      )}

      {userPerformance && (
        <div>
          <h3>Performances</h3>
          {/* ... Ajoutez ici le code pour afficher les performances ... */}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
