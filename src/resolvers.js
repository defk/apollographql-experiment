const _weatherAPI = require("./api/MeteoApi");
const MeteoApi = new _weatherAPI();

const resolvers = {
    Query: {
        MeteoListing: (parent, args, context) => MeteoApi.getMeteoListing(context.userId),
    }
};

module.exports = {
    resolvers,
};