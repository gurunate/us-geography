const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageDisabled } = require('apollo-server-core');

require('dotenv').config();

// const healthCheck = require('./lib/health-check');
const schema = require('./schema');

const port = process.env.PORT || 4000;

const typeDef = gql`
    type Query
    # type Mutation
    # type Subscription
`;

const server = new ApolloServer({
    typeDefs: [typeDef, schema.typeDefs],
    resolvers: schema.resolvers,
    dataSources: schema.dataSources,
    plugins: [ApolloServerPluginLandingPageDisabled()]
});

// healthCheck(server);

server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
