const {ApolloServer, gql} = require("apollo-server");
const _weatherAPI = require("./api/WeatherApi");
const _newsAPI = require('./api/NewsApi');
const _mailAPI = require('./api/MailApi');
const _placesAPI = require('./api/PlacesApi');

const WeatherApi = new _weatherAPI();
const NewsApi = new _newsAPI();
const MailApi = new _mailAPI();
const PlacesApi = new _placesAPI();

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
    type Place{
        id: Int!
        roadId: Int!
        address: Int!
        meters: Int!
    }
    type Road{
        id: Int!
        code: String!
        titleShort: String!
        titleFull: String
    }
    type WeatherItem{
        stationId: Int
        dateTime: String
        tAir: Float
        tRoad: Float
        wind: Float
        windDirection: String
        pressure: Int
        humidity: Int
        snowIntensity: Float
        rainIntensity: Float
    }
    
    type WeatherListing{
        places: [Place]!
        roads: [Road]!
        stations: [WeatherItem]!
    }

    type Query{
        Weather: Weather
        News: [News]
        Mail: Mail
        Place: [Place]
        Road: [Road]
        WeatherListing: WeatherListing
    }
`;

const resolvers = {
    Query: {
        Weather: () => WeatherApi.getWeather(),
        Mail: () => MailApi.getMail(),
        News: () => NewsApi.getNews(),

        WeatherListing: () => WeatherApi.getMeteoListing(),
        Place: () => PlacesApi.getPlace(),
        Road: () => PlacesApi.getRoad(),
    }
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});