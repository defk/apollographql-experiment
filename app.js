const {ApolloServer, AuthenticationError} = require("apollo-server");
const {typeDefs} = require("./src/schema");
const {resolvers} = require("./src/resolvers");
const {serverOpts} = require("./src/config");
const jwt = require("jsonwebtoken");
require("dotenv").config();

new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {

        const token = (req.headers.authorization || '').split(" ")[1];

        if (undefined === token) {

            throw new Error('Token is required');
        }

        const userId = jwt.verify(
            token,
            process.env.JWT_SECRET_KEY,
            function (err, decoded) {

                if (null !== err) {

                    return null;
                }

                if (undefined === decoded || undefined === decoded.userId) {

                    return null;
                }

                return decoded.uid;
            }
        );

        if (null === userId) {

            throw new AuthenticationError("Unauthorized");
        }

        console.log(userId);
    }
}).listen(
    serverOpts,
).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});