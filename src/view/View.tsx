import React from 'react'
import { ViewProps } from './types'

const View: React.FC<ViewProps> = ({
  children,
  className = '',
  padding = 'p-4',
  margin = 'm-0',
  bgColor = 'bg-white',
}) => {
  const classes = `${padding} ${margin} ${bgColor} ${className}`

  return <div className={classes}>{children}</div>
}

export default View
