import React from 'react'

import { classNames } from '@/lib/classNames'

import type { Color, Size } from '@/types'

export interface SpinnerProps extends React.ComponentPropsWithoutRef<'svg'> {
  /** 스피너의 크기 */
  size?: Size
  /** 스피너의 색상 */
  color?: Color
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
}

const COLOR_CLASSES: Record<Color, string> = {
  primary: 'text-primary-500',
  secondary: 'text-secondary-500',
  success: 'text-success-500',
  error: 'text-error-500',
  warning: 'text-warning-500',
  info: 'text-info-500',
}

export const Spinner = React.memo(
  ({
    size = 'md',
    color = 'primary',
    'aria-label': ariaLabel = '로딩 중',
    className,
    ...rest
  }: SpinnerProps) => (
    <svg
      className={classNames(
        'animate-spin',
        SIZE_CLASSES[size],
        COLOR_CLASSES[color],
        className,
      )}
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label={ariaLabel}
      {...rest}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  ),
)

Spinner.displayName = 'Spinner'
