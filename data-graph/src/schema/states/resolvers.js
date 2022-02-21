const resolvers = {
    Query: {
        states: async (_, __, { dataSources }) =>
            dataSources.StatesAPI.getStates()
    }
};

module.exports = {
    resolvers
};
