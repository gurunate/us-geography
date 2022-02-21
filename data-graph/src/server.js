const { ApolloServer, gql } = require('apollo-server');

// const healthCheck = require('./lib/health-check');
const schema = require('./schema');

const typeDef = gql`
    type Query
    # type Mutation
    # type Subscription
`;

const server = new ApolloServer({
    typeDefs: [typeDef, schema.typeDefs],
    resolvers: schema.resolvers,
    dataSources: schema.dataSources
});

// healthCheck(server);

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
