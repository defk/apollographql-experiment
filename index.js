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

const testWeather = {
    locationId: 100500,
    tAir: 22.7,
    wind: 4.1,
    windDirection: "СВ",
    pressure: 753,
    snowIntensity: 0.0,
    rainIntensity: 0.0,
};

const testMail = {
    address: "whatever@example.com",
    unread: 400,
    read: 5759,
};

const testNews = [
    {
        id: 1457,
        title: "Новость #1457",
        image: "/1457/index.jpg",
    },
    {
        id: 1627,
        title: "Новость #1627",
        image: "/1627/index.jpg",
    },
    {
        id: 1891,
        title: "Новость #1891",
        image: null,
    },
];

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