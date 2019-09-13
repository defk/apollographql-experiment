const {ApolloServer} = require("apollo-server");
const {typeDefs} = require("./src/schema");
const {resolvers} = require("./src/resolvers");
const {serverOpts} = require("./src/config");

new ApolloServer({
    typeDefs,
    resolvers
}).listen(
    serverOpts,
).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});