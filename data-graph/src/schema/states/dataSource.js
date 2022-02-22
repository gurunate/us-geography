const { RESTDataSource } = require('apollo-datasource-rest');

const states = require('./data.json');

class DataSource extends RESTDataSource {
    getStates() {
        return Promise.resolve(states);
    }
}

module.exports = DataSource;
