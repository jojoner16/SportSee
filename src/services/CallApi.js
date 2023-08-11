import {
  getUserInfos,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from './GetData';

// Fonction pour simuler un appel à l'API et récupérer les données utilisateur
const callApi = async (id) => {
  try {
    const userInfos = getUserInfos(id);
    const userActivity = getUserActivity(id);
    const userAverageSessions = getUserAverageSessions(id);
    const userPerformance = getUserPerformance(id);
    return {
      userInfos,
      userActivity,
      userAverageSessions,
      userPerformance,
    };
  } catch (error) {
    console.error('callApi error:', error);
    throw error;
  }
};

export default callApi;
