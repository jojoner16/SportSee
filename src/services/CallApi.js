// import {
//   getUserInfos,
//   getUserActivity,
//   getUserAverageSessions,
//   getUserPerformance,
// } from './GetData';

import {
  getUserInfos,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from './Api';

// Fonction pour simuler un appel à l'API et récupérer les données utilisateur
const callApi = async (id) => {
  console.log('Call API with id:', id);
  try {
    const userInfos = await getUserInfos(id);
    console.log('User Infos:', userInfos);
    const userActivity = await getUserActivity(id);
    console.log('User Activity:', userActivity);
    const userAverageSessions = await getUserAverageSessions(id);
    console.log('User Average Sessions:', userAverageSessions);
    const userPerformance = await getUserPerformance(id);
    console.log('User Performance:', userPerformance);

    return {
      infos: userInfos.data,
      activity: userActivity,
      averageSessions: userAverageSessions,
      performance: userPerformance,
    };
  } catch (error) {
    console.error('callApi error:', error);
    throw error;
  }
};

export default callApi;
