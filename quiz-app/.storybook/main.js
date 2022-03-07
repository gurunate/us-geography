const jsConfig = require('./jsconfig');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
        'storybook-addon-next-router'
    ],
    framework: '@storybook/react',
    webpackFinal: async (config, options) => {
        return jsConfig(config, options);
    }
};
