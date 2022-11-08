const {UserList, MovieList} = require("../FakeData")
// Load the full build.
const _ = require('lodash');

const resolvers = {
    // Will contain all the resolvers functions in the API

    Query: {
        // Function from typeDef -> type Query

        // Get All Users resolver
        users() {
            return UserList
        },

        // Get User by ID resolver
        // parameter parent - parent component
        // parameter args - props
        user(parent, args) {
            // If a DB is used, place filtering here
            const id = args.id
            const user = _.find(UserList, {id: Number(id)})
            return user
        },


        // Get All Movies resolver
        movies() {
            return MovieList
        },

        // Get Movie by name resolver
        movie(parent, args) {
            const title = args.title
            const movie = _.find(MovieList, {title})
            return movie
        },
    },

    User: {
        favoriteMovies: () => {
            return _.filter(
                MovieList,
                (movie) =>
                    movie.year >= 1990 && movie.year <= 2010
            )
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            // Gets the last id in the list
            const lastId = UserList[UserList.length - 1].id
            // Increment the Id of the newly created user obj
            user.id = lastId + 1
            UserList.push(user)

            return user
        },

        updateUsername: (parent, args) => {
            let userUpdated;
            const {id, newUsername} = args.input

            UserList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername
                    userUpdated = user
                }
            })
            return userUpdated
        },

        deleteUser: (parent, args) => {
            const id = args.id
            _.remove(
                UserList,
                (user) =>
                    user.id === Number(id))

            return
        }
    }
}

module.exports = {resolvers}