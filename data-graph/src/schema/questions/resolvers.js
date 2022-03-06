const resolvers = {
    Query: {
        getNextQuestion: () => ({
            question: 'What is the capital of Illinois?',
            choices: ['Albany', 'Montgomery', 'Springfield', 'Madison']
        })
    }
};

module.exports = {
    resolvers
};
