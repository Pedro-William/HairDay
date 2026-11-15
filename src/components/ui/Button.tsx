import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function Button({ children, className, type = 'button', ...props }: ButtonProps) {
  const classes = className ? `button ${className}` : 'button'

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
