import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Flex from './Flex'
import { FlexProps } from './types'

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    gap: { control: 'text' },
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args: FlexProps) => (
  <Flex {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <div className="p-4 bg-blackpink-pink">Item 1</div>
      <div className="p-4 bg-blackpink-lightPink">Item 2</div>
      <div className="p-4 bg-blackpink-darkPink">Item 3</div>
    </>
  ),
  direction: 'row',
  justify: 'start',
  align: 'stretch',
  wrap: 'nowrap',
  gap: 'gap-4',
  bgColor: 'bg-transparent',
  textColor: 'text-black',
}

export const CustomLayout = Template.bind({})
CustomLayout.args = {
  children: (
    <>
      <div className="p-4 bg-blackpink-pink">Item 1</div>
      <div className="p-4 bg-blackpink-lightPink">Item 2</div>
      <div className="p-4 bg-blackpink-darkPink">Item 3</div>
    </>
  ),
  direction: 'column',
  justify: 'center',
  align: 'center',
  wrap: 'wrap',
  gap: 'gap-8',
  bgColor: 'bg-white',
  textColor: 'text-blackpink-black',
}
