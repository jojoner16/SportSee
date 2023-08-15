import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserProfil from '../../components/userProfil/UserProfil';
import UserActivity from '../../components/userActivity/UserActivity';
import styled from 'styled-components';
import callApi from '../../services/CallApi';

const Main = styled.main`
  max-width: 1240px;
  margin-left: 14rem;
`;

function User() {
  const { userId } = useParams(); // Récupère l'ID de l'utilisateur depuis les paramètres d'URL

  const [userInfo, setUserInfo] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  // const [userAverageSessions, setUserAverageSessions] = useState(null);
  // const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    // Fetch user data using the getUserData function
    async function fetchUserData() {
      const data = await callApi(parseInt(userId));
      setUserInfo(data);

      setUserActivity(data.activity.data);

      // setUserAverageSessions(data.userAverageSessions.data);
      // setUserPerformance(data.userPerformance.data);
    }

    fetchUserData();
  }, [userId]);

  return (
    <Main>
      <UserProfil firstName={userInfo && userInfo.infos.userInfos.firstName} />
      <UserActivity userActivity={userActivity} />
    </Main>
  );
}

export default User;
