const {GraphQLDataSource} = require("apollo-datasource-graphql");
const {gql} = require("apollo-server");

class MeteoAPI extends GraphQLDataSource {

    constructor() {
        super();
        this.baseURL = "http://127.2.1.1/graphql";
    }

    async getMeteoListing() {

        return {
            'places': [
                {
                    id: 101520,
                    roadId: 7,
                    address: 100,
                    meters: 500,
                },
                {
                    id: 201510,
                    roadId: 22,
                    address: 100,
                    meters: 500,
                },
            ],
            'roads': [
                {
                    id: 7,
                    titleShort: 'Roads #7',
                    code: 'H-7',
                },
                {
                    id: 22,
                    titleShort: 'Roads #22',
                    code: 'H-22',
                },
            ],
            'stations': [
                {
                    stationId: 101520,
                    dateTime: "2019-03-03 09:45",
                    tAir: -0.25,
                    tRoad: 3.85,
                },
                {
                    stationId: 201510,
                    dateTime: "2019-03-03 09:45",
                    tAir: -0.15,
                    tRoad: 4.45,
                },
                {
                    stationId: 151020,
                    dateTime: "2019-03-03 09:45",
                    tAir: -0.55,
                    tRoad: 3.15,
                },
                {
                    stationId: 152010,
                    dateTime: "2019-03-03 09:45",
                    tAir: -1.40,
                    tRoad: 1.25,
                },
            ]
        };
    }
}

module.exports = MeteoAPI;