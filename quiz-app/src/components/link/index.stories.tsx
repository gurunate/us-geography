import { Story } from '@storybook/react';

import Component from '.';

const Stories = {
    title: 'Components',
    component: Component
};

const Template: Story = args => <Component {...args}>Default</Component>;

export const Link = Template.bind({});

Link.args = {
    href: '#'
};

export default Stories;
