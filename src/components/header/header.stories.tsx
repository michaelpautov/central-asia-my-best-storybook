/** @jsx createElement */
import { createElement } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { withMockedRedux } from '@devfest/decorators'
import { Header } from '@devfest/components'

export default {
  title: 'Header',
  component: Header,
  decorators: [withMockedRedux],
} as Meta

const Template: Story = (args) => <Header />

export const Default = Template.bind({})
Default.args = {}
