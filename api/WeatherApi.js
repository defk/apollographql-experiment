const {GraphQLDataSource} = require("apollo-datasource-graphql");
const {gql} = require("apollo-server");

class WeatherAPI extends GraphQLDataSource {

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
                    dateTime: "2019-03-03 08:00",
                    tAir: -0.25,
                    tRoad: 3.85,
                }
            ]
        };
    }

    async getWeather() {

        try {

            const response = await this.query(
                gql`
                    query Weather {
                        weather{
                            locationId
                            tAir
                            wind
                            windDirection
                            pressure
                            snowIntensity
                            rainIntensity
                        }
                    }
                `
            );

            return response.data.weather;

        } catch (e) {

            console.error(e)
        }
    }
}

module.exports = WeatherAPI;