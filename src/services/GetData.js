import CallApiService from './CallApi';
import * as MockedData from './MockedData';

class GetDataService {
  static async getUserInfos(id) {
    if (process.env.NODE_ENV === 'development') {
      return MockedData.getUserInfos(id).data;
    } else {
      return await CallApiService.getUserInfos(id);
    }
  }

  static async getUserActivity(id) {
    if (process.env.NODE_ENV === 'development') {
      return MockedData.getUserActivity(id).data;
    } else {
      return await CallApiService.getUserActivity(id);
    }
  }

  static async getUserAverageSessions(id) {
    if (process.env.NODE_ENV === 'development') {
      return MockedData.getUserAverageSessions(id).data;
    } else {
      return await CallApiService.getUserAverageSessions(id);
    }
  }

  static async getUserPerformance(id) {
    if (process.env.NODE_ENV === 'development') {
      return MockedData.getUserPerformance(id).data;
    } else {
      return await CallApiService.getUserPerformance(id);
    }
  }

  // Vous pouvez ajouter d'autres méthodes ici en fonction de vos besoins
}

export default GetDataService;
