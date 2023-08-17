import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserProfil from '../../components/userProfil/UserProfil';
import UserActivity from '../../components/userActivity/UserActivity';
import UserDashboard from '../../components/userAside/UserAside';
import UserAverageSessions from '../../components/userAverageSession/UserAverageSession';
import UserPerformance from '../../components/userPerformance/UserPerformance';
import styled from 'styled-components';
import callApi from '../../services/CallApi';

const Main = styled.main`
  max-width: 1240px;
  margin-left: 14rem;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const CustomContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: -18rem;
`;

function User() {
  const { userId } = useParams(); // Récupère l'ID de l'utilisateur depuis les paramètres d'URL

  const [userInfo, setUserInfo] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    // Fetch user data using the getUserData function
    async function fetchUserData() {
      const data = await callApi(parseInt(userId));
      console.log('Fetched data:', data);
      setUserInfo(data);

      setUserActivity(data.activity.data);

      setUserAverageSessions(data.averageSessions.data);
      setUserPerformance(data.performance.data);
    }

    fetchUserData();
  }, [userId]);

  return (
    <Main>
      <UserProfil firstName={userInfo && userInfo.infos.userInfos.firstName} />
      <ContentContainer>
        <UserActivity userActivity={userActivity} />
        <UserDashboard userData={userInfo && userInfo.infos} />
      </ContentContainer>
      <CustomContainer>
        <UserAverageSessions userAverageSessions={userAverageSessions} />
        <UserPerformance data={userPerformance} />
      </CustomContainer>
    </Main>
  );
}

export default User;
