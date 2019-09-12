const {ApolloServer, gql} = require("apollo-server");
const _weatherAPI = require("./api/WeatherApi");
const _newsAPI = require('./api/NewsApi');
const _mailAPI = require('./api/MailApi');

const WeatherApi = new _weatherAPI();
const NewsApi = new _newsAPI();
const MailApi = new _mailAPI();

const typeDefs = gql`
    type Weather{
        locationId: Int!
        tAir: Float
        wind: Float
        windDirection: String
        pressure: Int
        snowIntensity: Float
        rainIntensity: Float
    }
    type News{
        id: Int!
        title: String!
        image: String
    }
    type Mail{
        address: String!
        unread: Int
        read: Int
    }

    type Query{
        Weather: Weather
        News: [News]
        Mail: Mail
    }
`;

const resolvers = {
    Query: {
        Weather: () => WeatherApi.getWeather(),
        Mail: () => MailApi.getMail(),
        News: () => NewsApi.getNews(),
    }
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});