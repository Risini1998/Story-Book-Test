import type { Meta, StoryObj } from '@storybook/react'
import ToolTip from 'src/components/atoms/ToolTip/ToolTip'


const meta: Meta<typeof ToolTip> = {
  title: 'Atoms/ToolTip',
  component: ToolTip,
  tags: ['autodocs'],
  argTypes: {
  },
}

export default meta
type Story = StoryObj<typeof ToolTip>

export const ArrowTop: Story = {
  args: {
    id: 'exaple-tooltip',
    heading: 'This is a tooltip',
    children: 'Hello!',
  }
}
