import React from 'react';

import Component from '.';

const Stories = {
    title: 'Components',
    component: Component
};

const Template = args => <Component {...args} />;

export const QuestionCard = Template.bind({});

QuestionCard.args = {
    loading: false,
    question: "What's your favor color?",
    choice: ['red', 'white', 'blue']
};

export default Stories;
