import React from 'react'
import { ButtonProps } from './types'
import '../styles/index.css'

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  width = 'auto',
  shadow = 'md',
  color = 'pink-primary',
  children,
}) => {
  return (
    <button
      className={`bg-${color} shadow-${shadow !== 'none' && shadow}
      ${width !== 'auto' && `w-${width}`}
      ${color === 'pink-primary' && 'hover:bg-pink-secondary'}
      ${color === 'pink-secondary' && 'hover:bg-pink-primary'}
      ${color === 'black-primary' && 'hover:bg-black-secondary'}
      ${color === 'black-secondary' && 'hover:bg-pink-primary'}
      text-white font-bold py-2 px-4 rounded-full`}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  )
}

export default Button
