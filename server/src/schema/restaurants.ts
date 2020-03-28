enum Types { Fast_food, Restaurant, Cafe, Vege, Slow_food, Pub }

interface Restaurant {
    id: String!
    name: String
    description: String
}

type restaurant_chain implements Restaurant {
    id: String!
    name: String
    description: String
    type: [Types]
} 

type franchise implements Restaurant {
    id: String!
    name: String
    description: String
    type: [Types]
}

type private_restaurant implements Restaurant {
    id: String!
    name: String
    description: String
    type: [Types]
}