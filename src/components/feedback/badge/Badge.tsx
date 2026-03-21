import React from 'react'

import { classNames } from '@/lib/classNames'

import type { Color, Size, Variant } from '@/types'

export interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  /** 뱃지의 시각적 스타일 */
  variant?: Variant
  /** 뱃지의 크기 */
  size?: Size
  /** 뱃지의 색상 */
  color?: Color
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-1.5 text-xs h-5 rounded-full',
  md: 'px-2 text-xs h-6 rounded-full',
  lg: 'px-2.5 text-sm h-7 rounded-full',
}

const VARIANT_COLOR_CLASSES: Record<Variant, Record<Color, string>> = {
  solid: {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-secondary-500 text-white',
    success: 'bg-success-500 text-white',
    error: 'bg-error-500 text-white',
    warning: 'bg-warning-500 text-white',
    info: 'bg-info-500 text-white',
  },
  outline: {
    primary: 'border border-primary-500 text-primary-600',
    secondary: 'border border-secondary-500 text-secondary-600',
    success: 'border border-success-500 text-success-600',
    error: 'border border-error-500 text-error-600',
    warning: 'border border-warning-500 text-warning-600',
    info: 'border border-info-500 text-info-600',
  },
  ghost: {
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    success: 'text-success-600',
    error: 'text-error-600',
    warning: 'text-warning-600',
    info: 'text-info-600',
  },
  soft: {
    primary: 'bg-primary-50 text-primary-700',
    secondary: 'bg-secondary-50 text-secondary-700',
    success: 'bg-success-50 text-success-700',
    error: 'bg-error-50 text-error-700',
    warning: 'bg-warning-50 text-warning-700',
    info: 'bg-info-50 text-info-700',
  },
}

export const Badge = React.memo(
  ({
    variant = 'soft',
    size = 'md',
    color = 'primary',
    className,
    children,
    ...rest
  }: BadgeProps) => (
    <span
      className={classNames(
        'inline-flex items-center justify-center font-medium leading-none pt-px',
        SIZE_CLASSES[size],
        VARIANT_COLOR_CLASSES[variant][color],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  ),
)

Badge.displayName = 'Badge'
