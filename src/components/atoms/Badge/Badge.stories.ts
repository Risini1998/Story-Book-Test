import { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Hi',
    type: 'default',
    color: 'gray'
  }
}

export const Subtle: Story = {
  args: {
    children: 'Hi',
    type: 'subtle',
    color: 'gray'
  }
}
