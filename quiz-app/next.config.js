const { DATA_GRAPH_HOST, NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    rewrites: async () => {
        return isProduction
            ? []
            : [
                  {
                      source: '/graphql',
                      destination: DATA_GRAPH_HOST
                  }
              ];
    }
};

module.exports = nextConfig;
