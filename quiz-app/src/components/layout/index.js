import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';

import Header from './header';
import Footer from './footer';
import AppIcons from './app-icons';

const Layout = props => {
    const { children, title } = props;

    return (
        <>
            <Head>
                <title>{title} - US Geography Quiz</title>
                <AppIcons />
            </Head>
            <Container>
                <Header />
                <Box pt={4}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        {title}
                    </Typography>
                    {children}
                </Box>
                <Box mt={6}>
                    <Footer />
                </Box>
            </Container>
        </>
    );
};

export default Layout;
