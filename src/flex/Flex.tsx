import React from 'react'
import { FlexProps } from './types'

const Flex: React.FC<FlexProps> = ({
  children,
  className = '',
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = 'nowrap',
  gap = 'gap-4',
  bgColor = 'bg-transparent',
  textColor = 'text-black',
}) => {
  const classes = `
    flex 
    flex-${direction} 
    justify-${justify} 
    items-${align} 
    flex-${wrap} 
    ${gap} 
    ${bgColor} 
    ${textColor} 
    ${className}
  `

  return <div className={classes}>{children}</div>
}

export default Flex
