import React, {Fragment} from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import App from './app';
import { Button } from '@asia/components';

export default {
  title: 'App',
  component: App,
} as Meta;

const Template: Story = (args) => <Fragment><App {...args} /><Button/></Fragment>;

export const Default = Template.bind({});
Default.args = {
};
