const { gql } = require('apollo-server');

const typeDef = gql`
    extend type Query {
        states: [State!]
    }

    type State {
        name: String
        abbreviation: String
        capital: String
        mostPopulousCity: String
        population: String
        squareMiles: String
        timeZone_1: String
        timeZone_2: String
        dst: Boolean
    }
`;

module.exports = {
    typeDef
};
