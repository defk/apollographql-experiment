const _weatherAPI = require("./api/MeteoApi");
const MeteoApi = new _weatherAPI();

const resolvers = {
    Query: {
        MeteoListing: () => MeteoApi.getMeteoListing(),
    }
};

module.exports = {
    resolvers,
};