import {
  getUserInfos,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from './GetData';

// Fonction pour simuler un appel à l'API et récupérer les données utilisateur
const callApi = async (id) => {
  console.log(id);
  try {
    const userInfos = await getUserInfos(id);
    const userActivity = await getUserActivity(id);
    const userAverageSessions = await getUserAverageSessions(id);
    const userPerformance = await getUserPerformance(id);

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
