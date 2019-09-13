const {GraphQLDataSource} = require("apollo-datasource-graphql");
const {gql} = require("apollo-server");

class PlacesAPI extends GraphQLDataSource {

    constructor() {
        super();
        this.baseURL = "http://127.2.1.3/graphql";
    }

    async getRoad() {

        try {

            const response = await this.query(
                gql`
                    query Road {
                        road{
                            id
                            code
                            titleShort
                            titleFull
                        }
                    }
                `
            );

            return response.data.place;

        } catch (e) {

            console.error(e)
        }
    }

    async getPlace() {

        try {

            const response = await this.query(
                gql`
                    query Place {
                        place{
                            id
                            roadId
                            address
                            meters
                        }
                    }
                `
            );

            return response.data.place;

        } catch (e) {

            console.error(e)
        }
    }
}

module.exports = PlacesAPI;