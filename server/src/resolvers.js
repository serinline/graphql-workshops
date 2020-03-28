const { paginateResults } = require('./utils');
const { RESTDataSource } = require('apollo-datasource-rest');
const { UserInputError } = require('apollo-server');

module.exports = {
	Query: {
		me: async (_, __, ___) => ___.models.User.me()
	}
};

module.exports = {
	Query: {
	  restaurant: (_, { id }, { dataSources }) =>
		dataSources.restaurants.getRestaurantById({id})
		},
	  restaurantsList: (_,{ dataSources }) =>
		dataSources.restaurants.getRestaurantsList()
  };
  