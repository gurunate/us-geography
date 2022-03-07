import React from 'react';

import Component from '.';

const Stories = {
    title: 'Components',
    component: Component
};

const Template = args => <Component {...args}>Default</Component>;

export const Link = Template.bind({});

Link.args = {
    href: '#'
};

export default Stories;
