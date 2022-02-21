const { name, version } = require('../../package.json');

module.exports = server => {
    server.get('/api/health-check', (_, res) => {
        let retval = {
            status: 'pass',
            name,
            version
        };

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(retval, null, 4));
    });
};
