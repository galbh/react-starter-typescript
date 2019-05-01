import endpoints from '../../server/endpoints';

class ApiService {
  getOptions(key) {
    return endpoints[key];
  }
}

export default new ApiService();
