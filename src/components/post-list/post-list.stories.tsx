/** @jsx createElement */
import { createElement } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import MockPostList from '@devfest/components/post-list/post-list.mock'
import { withMockedResult } from '@devfest/decorators'
import { PostList } from '@devfest/components'

export default {
  title: 'PostList',
  component: PostList,
  decorators: [withMockedResult([MockPostList])],
} as Meta

const Template: Story = (args) => <PostList />

export const Default = Template.bind({})
Default.args = {}
