import { Story } from '@storybook/react';

import Component from '.';

const Stories = {
    title: 'Components',
    component: Component
};

const Template: Story = args => <Component {...args} />;

export const ProgressTimer = Template.bind({});

ProgressTimer.args = {
    loading: false,
    duration: 10
};

export default Stories;
