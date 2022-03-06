const states = require('./states');
const questions = require('./questions');

module.exports = {
    typeDefs: [states.typeDef, questions.typeDef],
    resolvers: [states.resolvers, questions.resolvers],
    dataSources: () => ({
        StatesAPI: new states.DataSource()
    })
};
