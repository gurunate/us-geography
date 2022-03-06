const { gql } = require('apollo-server');

const typeDef = gql`
    extend type Query {
        getNextQuestion: Question!
    }

    type Question {
        question: String!
        choices: [String!]
    }
`;

module.exports = {
    typeDef
};
