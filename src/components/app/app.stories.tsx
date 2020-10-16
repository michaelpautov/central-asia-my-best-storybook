import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import App from './app'
import { Button } from '@devfest/components'

export default {
  title: 'App',
  component: App,
} as Meta

const Template: Story = (args) => <div><Button/><App {...args} /></div>

export const Default = Template.bind({})
Default.args = {}
