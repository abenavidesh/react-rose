import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Container from './Container'
import { ContainerProps } from './types'

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    className: { control: 'text' },
    fluid: { control: 'boolean' },
  },
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args: ContainerProps) => (
  <Container {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: <div className="p-4 bg-pink-primary">This is a container</div>,
  className: '',
  fluid: false,
}

export const Fluid = Template.bind({})
Fluid.args = {
  children: (
    <div className="p-4 bg-pink-primary">This is a fluid container</div>
  ),
  className: '',
  fluid: true,
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  children: (
    <div className="p-4 bg-pink-primary">This is a custom container</div>
  ),
  className: 'bg-blackpink-pink',
  fluid: false,
}
