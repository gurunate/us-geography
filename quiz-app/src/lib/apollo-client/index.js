import { ApolloClient } from '@apollo/client';

import initCache from './init-cache';

const cache = initCache();

export const client = new ApolloClient({
    uri: '/graphql',
    cache
});
