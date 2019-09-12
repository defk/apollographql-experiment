const {GraphQLDataSource} = require("apollo-datasource-graphql");
const {gql} = require("apollo-server");

class WeatherAPI extends GraphQLDataSource {

    constructor() {
        super();
        this.baseURL = "http://127.2.1.1/graphql";
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