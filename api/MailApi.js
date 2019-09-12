const {GraphQLDataSource} = require("apollo-datasource-graphql");
const {gql} = require("apollo-server");

class MailAPI extends GraphQLDataSource {

    constructor() {
        super();
        this.baseURL = "http://127.2.1.3/graphql";
    }

    async getMail() {

        try {

            const response = await this.query(
                gql`
                    query Mail {
                        mail{
                            address
                            read
                            unread
                        }
                    }
                `
            );

            return response.data.mail;

        } catch (e) {

            console.error(e)
        }
    }
}

module.exports = MailAPI;