import { graphql } from 'msw';

import statesFixture from '../fixtures/states';

export const handlers = [
    graphql.query('GetStates', (_, res, ctx) => {
        return res(ctx.delay(2000), ctx.data(statesFixture));
    })
];
