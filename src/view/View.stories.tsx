import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import View from './View'
import { ViewProps } from './types'

export default {
  title: 'Components/View',
  component: View,
  argTypes: {
    padding: { control: 'text' },
    margin: { control: 'text' },
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof View>

const Template: ComponentStory<typeof View> = (args: ViewProps) => (
  <View {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'This is a view container',
  padding: 'p-4',
  margin: 'm-4',
  bgColor: 'bg-white',
  textColor: 'text-black',
}

export const CustomColors = Template.bind({})
CustomColors.args = {
  children: 'This is a view container with custom colors',
  padding: 'p-4',
  margin: 'm-0',
  bgColor: 'bg-pink-primary',
  textColor: 'text-pink-secondary',
}
