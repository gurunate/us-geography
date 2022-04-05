import { gql, useQuery } from '@apollo/client';

import Layout from '@/components/layout';

export const GET_STATES = gql`
    query GetStates {
        states: getStates {
            name
        }
    }
`;

const StatesPage = () => {
    const { data, loading, errors } = useQuery(GET_STATES);

    const { states } = data ?? [];

    return (
        <Layout title="States">
            <ol>
                {states?.map(state => (
                    <li key={state.name}>{state.name}</li>
                ))}
            </ol>
        </Layout>
    );
};

export default StatesPage;
