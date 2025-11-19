import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
}

export default function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
        {
          'bg-primary/10 text-primary border border-primary/20': variant === 'default',
          'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20': variant === 'success',
          'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20': variant === 'warning',
          'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20': variant === 'danger',
          'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20': variant === 'info',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
