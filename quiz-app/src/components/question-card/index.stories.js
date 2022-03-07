import React from 'react';
import faker from '@faker-js/faker';

import Component from '.';

const Stories = {
    title: 'Components',
    component: Component
};

const Template = args => <Component {...args} />;

export const QuestionCard = Template.bind({});

QuestionCard.args = {
    loading: false,
    question: faker.lorem.sentence(),
    choices: [
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word()
    ]
};

export default Stories;
