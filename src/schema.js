const {gql} = require("apollo-server");

const typeDefs = gql`
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
    
    type StationContent{
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
    
    type MeteoListing{
        places: [Place]!
        roads: [Road]!
        stations: [StationContent]!
    }

    type Query{
        MeteoListing: MeteoListing
    }
`;

module.exports = {
    typeDefs,
};