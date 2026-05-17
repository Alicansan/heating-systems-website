import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium'
  const styles =
    variant === 'primary'
      ? 'bg-accent text-white hover:brightness-90'
      : 'bg-transparent text-slate-200 hover:text-white'

  return <button className={`${base} ${styles} ${className}`} {...props} />
}
