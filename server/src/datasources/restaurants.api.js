const { RESTDataSource } = require('apollo-datasource-rest');

class RestaurantsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://31161975.ngrok.io/';
  }
  async getRestaurantById(id) {
    const response = await this.get(`restaurants/${id}`);
    return response;
  }
  async getRestaurantsList() {
    const response = await this.get('restaurants');
    return response;
  };
}

module.exports = RestaurantsAPI;
