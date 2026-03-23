import React from 'react'

import { classNames } from '@/lib/classNames'

import type { Color, Size } from '@/types'

export interface ProgressBarProps extends React.ComponentPropsWithoutRef<'div'> {
  /** 진행 값 (0–100) */
  value?: number
  /** 진행 바의 크기 */
  size?: Size
  /** 진행 바의 색상 */
  color?: Color
  /** true이면 무한 애니메이션 재생 (불확정 상태) */
  indeterminate?: boolean
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
}

const COLOR_CLASSES: Record<Color, string> = {
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  success: 'bg-success-500',
  error: 'bg-error-500',
  warning: 'bg-warning-500',
  info: 'bg-info-500',
}

export const ProgressBar = React.memo(
  ({
    value = 0,
    size = 'md',
    color = 'primary',
    indeterminate = false,
    'aria-label': ariaLabel = '로딩 중',
    className,
    ...rest
  }: ProgressBarProps) => {
    const clampedValue: number = Math.min(100, Math.max(0, value))

    return (
      <div
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
        className={classNames(
          'w-full overflow-hidden rounded-full bg-gray-200',
          SIZE_CLASSES[size],
          className,
        )}
        {...rest}
      >
        <div
          className={classNames(
            'h-full rounded-full transition-all duration-300 ease-out',
            COLOR_CLASSES[color],
            indeterminate && 'animate-indeterminate w-1/2',
          )}
          style={indeterminate ? undefined : { width: `${clampedValue}%` }}
        />
      </div>
    )
  },
)

ProgressBar.displayName = 'ProgressBar'
