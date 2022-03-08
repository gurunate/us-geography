import React from 'react';
import faker from '@faker-js/faker';

import Component from '.';

const Stories = {
    title: 'Components',
    component: Component
};

const Template = args => <Component {...args} />;

export const ProgressTimer = Template.bind({});

ProgressTimer.args = {
    loading: false,
    duration: 10
};

export default Stories;
