const {GraphQLDataSource} = require("apollo-datasource-graphql");
const {gql} = require("apollo-server");

class NewsAPI extends GraphQLDataSource {

    constructor() {
        super();
        this.baseURL = "http://127.2.1.2/graphql";
    }

    async getNews() {

        try {

            const response = await this.query(
                gql`
                    query News {
                        news{
                            id
                            title
                            image
                        }
                    }
                `
            );

            return response.data.news;

        } catch (e) {

            console.error(e)
        }
    }
}

module.exports = NewsAPI;