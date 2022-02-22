const states = require('./states');

module.exports = {
    typeDefs: [states.typeDef],
    resolvers: [states.resolvers],
    dataSources: () => ({
        StatesAPI: new states.DataSource()
    })
};
