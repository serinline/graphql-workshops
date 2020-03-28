const { RESTDataSource } = require('apollo-datasource-rest');

class RestaurantsListAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://localhost:1337/restaurants';
  }
  async getRestaurantsList({ id }) {
    const response = await this.get('restaurants');
    return this(response);
  };
}

module.exports = RestaurantsListAPI;
