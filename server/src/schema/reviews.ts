enum Ratings { Very_good, Good, Fine, Bad }

interface Review {
    id: String!
    name: String
    description: String
}

type Opinion implements Review {
    id: String!
    name: String
    description: String
    Rate: [Ratings]
} 