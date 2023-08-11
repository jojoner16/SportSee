import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './MockedData';

// Fonction de récupération des informations utilisateur
export const getUserInfos = async (id) => {
  try {
    const res = USER_MAIN_DATA.find((el) => el.id === id);
    return { data: res };
  } catch (error) {
    console.error('getUserInfos error:', error);
    throw error;
  }
};

// Fonction de récupération de l'activité utilisateur
export const getUserActivity = async (id) => {
  try {
    const res = USER_ACTIVITY.find((el) => el.userId === id);
    return { data: res };
  } catch (error) {
    console.error('getUserActivity error:', error);
    throw error;
  }
};

// Fonction de récupération de la session moyenne de l'utilisateur
export const getUserAverageSessions = async (id) => {
  try {
    const res = USER_AVERAGE_SESSIONS.find((el) => el.userId === id);
    return { data: res };
  } catch (error) {
    console.error('getUserAverageSessions error:', error);
    throw error;
  }
};

// Fonction de récupération des performances utilisateur
export const getUserPerformance = async (id) => {
  try {
    const res = USER_PERFORMANCE.find((el) => el.userId === id);
    return { data: res };
  } catch (error) {
    console.error('getUserPerformance error:', error);
    throw error;
  }
};
