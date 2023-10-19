// Fonction de formatage des données utilisateur
export const formatUserData = (todayScore, score) => {
  return {
    name: 'score',
    value: todayScore || score || 0,
  };
};

// Fonction de récupération des informations utilisateur
export const getUserInfos = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${id}`);
    // console.log(res);
    return res.json();
  } catch (error) {
    console.error('getUserInfos error:', error);
    throw error;
  }
};

// Fonction de récupération de l'activité utilisateur
export const getUserActivity = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${id}/activity`);
    return res.json();
  } catch (error) {
    console.error('getUserActivity error:', error);
    throw error;
  }
};

// Fonction de récupération de la session moyenne de l'utilisateur
export const getUserAverageSessions = async (id) => {
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
export const getUserPerformance = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${id}/performance`);
    return res.json();
  } catch (error) {
    console.error('getUserPerformance error:', error);
    throw error;
  }
};
