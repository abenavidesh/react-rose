export interface ButtonProps {
  label: string
  onClick: () => void
  width?: 'auto' | 'full'
  shadow?: 'sm' | 'md' | 'lg' | 'none'
  color: 'pink-primary' | 'pink-secondary' | 'black-primary' | 'black-secondary'
  children?: ReactChild
}
