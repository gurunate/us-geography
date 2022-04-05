import { Typography } from '@mui/material';
import faker from '@faker-js/faker';

import Layout from '@/components/layout';

export default function IndexPage() {
    return (
        <Layout title="Home">
            {faker.lorem
                .paragraphs(5)
                .split('\n')
                .map((p, idx) => (
                    <Typography key={idx} paragraph>
                        {p}
                    </Typography>
                ))}
        </Layout>
    );
}
