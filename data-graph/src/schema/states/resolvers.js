const resolvers = {
    Query: {
        getStates: async (_, __, { dataSources }) =>
            dataSources.StatesAPI.getStates()
    }
};

module.exports = {
    resolvers
};
