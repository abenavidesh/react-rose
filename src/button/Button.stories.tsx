import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Buttom'
import { ButtonProps } from './types'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args}></Button>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Click me',
  onClick: () => alert('Button clicked!'),
  shadow: 'md',
  color: 'black-primary',
  width: 'full',
}
