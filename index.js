const {ApolloServer} = require("apollo-server")
const {typeDefs} = require("./schema/type-defs")
const {resolvers} = require("./schema/resolvers")

// resolvers -> function that deal with the data (DB calls, etc)
// typeDefs ->  all queries, mutations, etc will be here
const server = new ApolloServer({typeDefs, resolvers})
server.listen().then(({url}) => {
    console.log("Your API is running at: " + url)
})

