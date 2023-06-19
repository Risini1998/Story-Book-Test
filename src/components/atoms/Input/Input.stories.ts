import { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      options: ['md', 'sm'],
      control: { type: 'inline-radio' }
    }
    // state: {
    //   options: ['default', 'hover', 'focused', 'disabled'],
    //   control: { type: 'select' }
    // }
  }
}

export default meta

type Story = StoryObj<typeof Input>

export const Base: Story = {
  args: {
    isHintEnabled: true,
    hint: 'This is a hint text to help user.',
    isLeadingIcon: false,
    isTrailingIcon: false,
    isLabelEnabled: true,
    label: 'Label',
    leadingIcon: null,
    required: true,
    inputSize: 'md',
    // state: 'default',
    telInput: false,
    trailingIcon: null
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    isHintEnabled: true,
    hint: 'This is a hint text to help user.',
    isLeadingIcon: false,
    isTrailingIcon: false,
    isLabelEnabled: true,
    label: 'Label',
    leadingIcon: null,
    required: true,
    inputSize: 'md',
    // state: 'default',
    telInput: false,
    trailingIcon: null
  }
}

export const Placeholder: Story = {
  args: {
    isHintEnabled: true,
    hint: 'This is a hint text to help user.',
    isLeadingIcon: false,
    isTrailingIcon: false,
    isLabelEnabled: true,
    label: 'Label',
    leadingIcon: null,
    required: true,
    inputSize: 'md',
    // state: 'default',
    telInput: false,
    trailingIcon: null,
    placeholder: 'Placeholder text'
  }
}

export const ChangeHandler: Story = {
  name: 'Change Handler',
  args: {
    isHintEnabled: true,
    hint: 'View the console',
    isLeadingIcon: false,
    isTrailingIcon: false,
    isLabelEnabled: true,
    label: 'Label',
    leadingIcon: null,
    required: true,
    inputSize: 'md',
    // state: 'default',
    telInput: false,
    trailingIcon: null,
    placeholder: 'Enter text',
    onChange: e => {
      console.log(e.target.value)
    }
  }
}
