import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

class CallApiService {
  static async getUserInfos(id) {
    try {
      const response = await api.get(`/user/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  }

  static async getUserActivity(id) {
    try {
      const response = await api.get(`/user/${id}/activity`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user activity:', error);
      throw error;
    }
  }

  static async getUserAverageSessions(id) {
    try {
      const response = await api.get(`/user/${id}/average-sessions`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user average sessions:', error);
      throw error;
    }
  }

  static async getUserPerformance(id) {
    try {
      const response = await api.get(`/user/${id}/performance`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user performance:', error);
      throw error;
    }
  }
}

export default CallApiService;
