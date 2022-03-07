import { ApolloProvider } from '@apollo/client';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { client } from '../src/lib/apollo-client';

export const decorators = [
    Story => (
        <ApolloProvider client={client}>
            <Story />
        </ApolloProvider>
    )
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    nextRouter: {
        Provider: RouterContext.Provider
    }
};
