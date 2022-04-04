import { Avatar, Box, Grid, Stack } from '@mui/material';

import Link from 'next/link';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name)
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
}

export default function Header() {
    return (
        <header>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Stack direction="row" spacing={2}>
                        <Link href="/">Home</Link>
                        <Link href="/states">States</Link>
                        <Link href="/quiz">Quiz</Link>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="flex-end">
                        <Avatar {...stringAvatar('Kent Dodds')} />
                    </Box>
                </Grid>
            </Grid>
        </header>
    );
}
