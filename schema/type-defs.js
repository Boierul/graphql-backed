// gql - allows to write graphQL code
const {gql} = require("apollo-server")

const typeDefs = gql`

    #   type of the model     
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    #   type of the model     
    type Movie {
        id:ID!
        title: String!
        producedBy: String!
        year: Int!
        isInTheaters: Boolean!
    }

    #   queries   
    type Query {
        users: [User!]!
        user(id: ID!) : User!
        movies: [Movie!]!
        movie(title:String!) : Movie!
    }

    enum Nationality {
        US
        GERMANY
        ESTONIA
    }

`

module.exports = {typeDefs}