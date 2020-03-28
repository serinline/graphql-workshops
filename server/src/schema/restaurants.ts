enum Types { Fast_food, Restaurant, Cafe, Vege, Slow_food, Pub }
enum Ratings { Very_good, Good, Fine, Bad }

interface Restaurant {
    id: String!
    name: String
    description: String
    reviews: [Review!]!
}

type Restaurant_chain implements Restaurant {
    id: String!
    name: String
    description: String
    type: [Types]
} 

type Franchise implements Restaurant {
    id: String!
    name: String
    description: String
    type: [Types]
}

type Private_restaurant implements Restaurant {
    id: String!
    name: String
    description: String
    type: [Types]
}

type Review {
    id: String!
    name: String
    description: String
    Rate: [Ratings]
} 

type Query {
    restaurants(): [Restaurant]!
    reviews(): [Review]!
    review(id: ID!): Review
    restaurant(id: ID!): Restaurant
  }
  