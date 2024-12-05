import React from 'react'
import { ContainerProps } from './types'

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  fluid = false,
}) => {
  const containerClass = fluid ? 'w-full' : 'container mx-auto'
  return <div className={`${containerClass} px-4 ${className}`}>{children}</div>
}

export default Container
