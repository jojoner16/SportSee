import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserProfil from '../../components/userProfil/UserProfil';
import UserActivity from '../../components/userActivity/UserActivity';
import UserDashboard from '../../components/userAside/UserAside';
import UserAverageSessions from '../../components/userAverageSession/UserAverageSession';
import UserPerformance from '../../components/userPerformance/UserPerformance';
import UserScore from '../../components/userScore/UserScore';
import callApi from '../../services/CallApi';
import SideBar from '../../components/sideBar/SideBar';

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
    <main className="mainContainer">
      <SideBar />
      <UserProfil firstName={userInfo && userInfo.infos.userInfos.firstName} />
      <div className="userContentContainer">
        <UserActivity userActivity={userActivity} />
        <UserDashboard userData={userInfo && userInfo.infos} />
      </div>
      <div className="userCustomContainer">
        <UserAverageSessions userAverageSessions={userAverageSessions} />
        <UserPerformance data={userPerformance} />
        <UserScore
          score={userInfo?.infos?.score}
          todayScore={userInfo?.infos?.todayScore}
        />
      </div>
    </main>
  );
}

export default User;
