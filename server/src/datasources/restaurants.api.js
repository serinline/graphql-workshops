const { RESTDataSource } = require('apollo-datasource-rest');

class RestaurantsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://localhost:1337/restaurants';
  }
  async getRestaurantById({ id }) {
    const response = await this.get('restaurants', { id: id });
    return this.restaurantsReducer(response[0]);
  }

  restaurantsReducer(restaurant) {
    return {
      id: restaurant.id || 0,
      name: restaurant.seriesName,
      description: restaurant.description
    };
  }
}

module.exports = RestaurantsAPI;
