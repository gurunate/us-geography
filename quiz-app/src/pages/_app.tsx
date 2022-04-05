import * as React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ApolloProvider } from '@apollo/client';

import theme from '@/theme';
import createEmotionCache from '@/lib/createEmotionCache';
import { client } from '@/lib/apollo-client';

const { publicRuntimeConfig } = getConfig();

const { NEXT_PUBLIC_API_MOCKING } = publicRuntimeConfig ?? {};

if (NEXT_PUBLIC_API_MOCKING === 'enabled') {
    require('../mocks');
}

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        </CacheProvider>
    );
}

export default MyApp;
