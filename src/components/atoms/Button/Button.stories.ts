import type { Meta, StoryObj } from '@storybook/react'

import Button from 'src/components/atoms/Button/Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Button',
  },
}
