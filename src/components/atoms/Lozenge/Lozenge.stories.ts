import { Meta, type StoryObj } from '@storybook/react'
import Lozenge from './Lozenge'

const meta: Meta<typeof Lozenge> = {
  tags: ['autodocs'],
  title: 'Atoms/Lozenge',
  component: Lozenge
}

export default meta

type Story = StoryObj<typeof Lozenge>

export const Default: Story = {
  args: {
    color: 'default',
    content: 'Lozenge',
    flag: false,
    isIconEnabled: false,
    icon: 'ri-checkbox-blank-circle-line',
    type: 'default'
  }
}

export const Subtle: Story = {
  args: {
    color: 'default',
    content: 'Lozenge',
    flag: false,
    isIconEnabled: false,
    icon: 'ri-checkbox-blank-circle-line',
    type: 'subtle'
  }
}

export const Outline: Story = {
  args: {
    color: 'default',
    content: 'Lozenge',
    flag: false,
    isIconEnabled: false,
    icon: 'ri-checkbox-blank-circle-line',
    type: 'outline'
  }
}
