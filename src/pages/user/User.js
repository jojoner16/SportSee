import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserProfil from '../../components/userProfil/UserProfil';
import UserActivity from '../../components/userActivity/UserActivity';
import UserDashboard from '../../components/userAside/UserAside';
import UserAverageSessions from '../../components/userAverageSession/UserAverageSession';
import UserPerformance from '../../components/userPerformance/UserPerformance';
import UserScore from '../../components/userScore/UserScore';
import { callApi } from '../../services/Api';

function User() {
  const navigate = useNavigate();
  const { userId } = useParams(); // Récupère l'ID de l'utilisateur depuis les paramètres d'URL

  const [userInfo, setUserInfo] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    // Fetch user data using the getUserData function
    async function fetchUserData() {
      try {
        const data = await callApi(parseInt(userId));
        setUserInfo(data);
        setUserActivity(data.activity?.data || []);
        setUserAverageSessions(data.averageSessions?.data || []);
        setUserPerformance(data.performance?.data || []);
      } catch (error) {
        navigate('/error');
        // Gérer les erreurs de manière appropriée, par exemple, afficher un message d'erreur.
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, [navigate, userId]);

  return (
    <main className="mainContainer">
      <UserProfil firstName={userInfo?.infos?.userInfos?.firstName} />
      <div className="userContentContainer">
        <UserActivity userActivity={userActivity} />
        <UserDashboard userData={userInfo?.infos} />
      </div>
      <div className="userCustomContainer">
        <UserAverageSessions userAverageSessions={userAverageSessions} />
        <UserPerformance data={userPerformance} />
        <UserScore
          userId={userInfo?.infos?.id}
          score={userInfo?.infos?.score}
          todayScore={userInfo?.infos?.todayScore}
        />
      </div>
    </main>
  );
}

export default User;
