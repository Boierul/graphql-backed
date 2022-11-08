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

    #   queries  - GET 
    type Query {
        users: [User!]!
        user(id: ID!) : User!
        movies: [Movie!]!
        movie(title:String!) : Movie!
    }

    #   Specify the values that needs to be sent  
    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = US
    }

    #   Specify the values that needs to be sent  
    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }

    #   mutations  - POST, DELETE, UPDATE 
    type Mutation {
        createUser(input : CreateUserInput!) : User
        updateUsername(input : UpdateUsernameInput!) : User
        # No need to create input / just 1 param       
        deleteUser(id:ID!) : User
    }

    enum Nationality {
        US
        GERMANY
        ESTONIA
    }

`

module.exports = {typeDefs}