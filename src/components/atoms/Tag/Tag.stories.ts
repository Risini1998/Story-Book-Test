import Tag from 'src/components/atoms/Tag/Tag';
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
  },
}

export default meta
type Story = StoryObj<typeof Tag>

export const DefaultTag: Story = {
  args: {
    type:'default',
    children: 'Tag',
    closable:true,
    disabled:false
  },
}
