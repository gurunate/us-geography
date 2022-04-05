const { DATA_GRAPH_HOST, NEXT_PUBLIC_API_MOCKING, NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production';

const nextConfig = {
    publicRuntimeConfig: {
        NEXT_PUBLIC_API_MOCKING
    },
    reactStrictMode: true,
    rewrites: async () => [
        {
            source: '/graphql',
            destination: DATA_GRAPH_HOST
        }
    ]
};

module.exports = nextConfig;
