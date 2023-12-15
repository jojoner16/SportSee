// Import des fonctions depuis GetData
import * as GetData from './GetData';

// require('dotenv').config();

// Fonction de récupération des informations utilisateur
const getUserInfos = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${id}`);
    return res.json();
  } catch (error) {
    console.error('getUserInfos error:', error);
    throw error;
  }
};

// Fonction de récupération de l'activité utilisateur
const getUserActivity = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${id}/activity`);
    return res.json();
  } catch (error) {
    console.error('getUserActivity error:', error);
    throw error;
  }
};

// Fonction de récupération de la session moyenne de l'utilisateur
const getUserAverageSessions = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    return res.json();
  } catch (error) {
    console.error('getUserAverageSessions error:', error);
    throw error;
  }
};

// Fonction de récupération des performances utilisateur
const getUserPerformance = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${id}/performance`);
    return res.json();
  } catch (error) {
    console.error('getUserPerformance error:', error);
    throw error;
  }
};

// Fonction pour simuler un appel à l'API et récupérer les données utilisateur
export const callApi = async (id) => {
  const mode = 'PROD';
  console.log(mode);
  switch (mode) {
    case 'PROD':
      try {
        const userInfos = await getUserInfos(id);
        const userActivity = await getUserActivity(id);
        const userAverageSessions = await getUserAverageSessions(id);
        const userPerformance = await getUserPerformance(id);

        // Ajoutez ces logs pour vérifier comment les données sont transmises au composant
        console.log('Data passed to UserActivity:', {
          userInfos: userInfos.data,
          userActivity,
          userAverageSessions,
          userPerformance,
        });

        return {
          infos: userInfos.data,
          activity: userActivity,
          averageSessions: userAverageSessions,
          performance: userPerformance,
        };
      } catch (apiError) {
        console.error('Api error:', apiError);
      }
      break;
    case 'DEV':
      try {
        const userInfos = await GetData.getUserInfos(id);
        const userActivity = await GetData.getUserActivity(id);
        const userAverageSessions = await GetData.getUserAverageSessions(id);
        const userPerformance = await GetData.getUserPerformance(id);

        // Ajout des logs pour vérifier comment les données sont transmises au composant
        console.log('Data passed to UserActivity (GetData):', {
          userInfos: userInfos.data,
          userActivity,
          userAverageSessions,
          userPerformance,
        });

        return {
          infos: userInfos.data,
          activity: userActivity,
          averageSessions: userAverageSessions,
          performance: userPerformance,
        };
      } catch (getDataError) {
        console.error('Both Api and GetData failed.', getDataError);
        throw getDataError;
      }
    default:
      console.log('ok');
  }
};
