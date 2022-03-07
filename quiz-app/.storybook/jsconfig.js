const path = require('path');

// use jsConfig resolve imports
module.exports = function jsConfig(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src')
    };

    return config;
};
