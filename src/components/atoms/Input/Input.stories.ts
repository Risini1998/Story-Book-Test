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
    isLeadingIconEnabled: false,
    isTrailingIconEnabled: false,
    isLabelEnabled: true,
    label: 'Label',
    leadingIcon: 'ri-checkbox-blank-circle-line',
    required: true,
    inputSize: 'md',
    // state: 'default',
    telInput: false,
    trailingIcon: 'ri-arrow-down-fill'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    isHintEnabled: true,
    hint: 'This is a hint text to help user.',
    isLeadingIconEnabled: false,
    isTrailingIconEnabled: false,
    isLabelEnabled: true,
    label: 'Label',
    leadingIcon: '',
    required: true,
    inputSize: 'md',
    // state: 'default',
    telInput: false,
    trailingIcon: ''
  }
}

export const Placeholder: Story = {
  args: {
    isHintEnabled: true,
    hint: 'This is a hint text to help user.',
    isLeadingIconEnabled: false,
    isTrailingIconEnabled: false,
    isLabelEnabled: true,
    label: 'Label',
    leadingIcon: '',
    required: true,
    inputSize: 'md',
    // state: 'default',
    telInput: false,
    trailingIcon: '',
    placeholder: 'Placeholder text'
  }
}

export const ChangeHandler: Story = {
  name: 'Change Handler',
  args: {
    isHintEnabled: true,
    hint: 'View the console',
    isLeadingIconEnabled: false,
    isTrailingIconEnabled: false,
    isLabelEnabled: true,
    label: 'Label',
    leadingIcon: '',
    required: true,
    inputSize: 'md',
    // state: 'default',
    telInput: false,
    trailingIcon: '',
    placeholder: 'Enter text',
    onChange: e => {
      console.log(e.target.value)
    }
  }
}

export const Password: Story = {
  name: 'Password',
  args: {
    // state: 'default',
    hint: 'Type the password',
    inputSize: 'md',
    isHintEnabled: true,
    isLabelEnabled: true,
    isLeadingIconEnabled: false,
    isTrailingIconEnabled: false,
    label: 'Label',
    leadingIcon: '',
    placeholder: 'Enter password',
    required: true,
    telInput: false,
    trailingIcon: 'ri-arrow-down-fill',
    type: 'password',
    onChange: e => {
      console.log(e.target.value)
    }
  }
}
