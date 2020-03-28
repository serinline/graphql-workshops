enum Types { Fast_food, Restaurant, Cafe, Vege, Slow_food, Pub }

interface Restaurant {
    id: String!
    name: String
    description: String
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