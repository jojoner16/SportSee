// Formatage des données utilisateur principal
export const formatUserScore = (userId, todayScore, score) => {
  const formattedData = [{ name: 'score', value: todayScore || score || 0 }];

  console.log('Raw Data in formatUserScore:', {
    userId,
    formattedData,
  });

  return formattedData;
};

// Formatage de l'activité utilisateur
export const formatUserActivity = (rawData) => {
  console.log('Raw Data in formatUserActivity:', rawData);

  // Vérifier que rawData est défini et contient la propriété sessions
  if (!rawData || !rawData.sessions) {
    return { userId: null, sessions: [] };
  }

  // Utiliser la méthode map uniquement si rawData.sessions est défini
  return {
    userId: rawData.userId,
    sessions: rawData.sessions.map((session) => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    })),
  };
};

// Formatage de la session moyenne de l'utilisateur
export const formatUserAverageSessions = (rawData) => {
  console.log('Raw Data in formatUserAverageSessions:', rawData);
  // Vérifier que rawData est défini et contient la propriété sessions
  if (!rawData || !rawData.sessions) {
    return { userId: null, sessions: [] };
  }

  // Utiliser la méthode map uniquement si rawData.sessions est défini
  return {
    userId: rawData.userId,
    sessions: rawData.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    })),
  };
};

// Formatage des performances utilisateur
export const formatUserPerformance = (rawData) => {
  console.log('Raw Data in formatUserPerformance:', rawData);

  // Vérifier que rawData est défini et contient la propriété data
  if (!rawData || !rawData.data) {
    return { userId: null, kind: null, data: [] };
  }

  // Utiliser la méthode map uniquement si rawData.data est défini
  return {
    userId: rawData.userId,
    kind: rawData.kind,
    data: rawData.data.map((performanceData) => ({
      value: performanceData.value,
      kind: performanceData.kind,
    })),
  };
};
