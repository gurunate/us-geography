const { shuffle } = require('../../lib/utils');

console.log({ shuffle });

const resolvers = {
    Query: {
        getNextQuestion: () => {
            return {
                question: 'What is the capital of Illinois?',
                choices: shuffle([
                    'Albany',
                    'Montgomery',
                    'Springfield',
                    'Madison'
                ])
            };
        }
    }
};

module.exports = {
    resolvers
};
