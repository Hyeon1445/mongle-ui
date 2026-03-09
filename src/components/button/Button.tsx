import React from 'react'

import { classNames } from '@/lib/classNames'

import type { Color, Size, Variant } from '@/types'

export interface ButtonProps
  extends React.ComponentPropsWithRef<'button'> {
  /** 버튼의 시각적 스타일 */
  variant?: Variant
  /** 버튼의 크기 */
  size?: Size
  /** 버튼의 색상 */
  color?: Color
  /** 전체 너비 사용 여부 */
  fullWidth?: boolean
  /** 로딩 상태 */
  isLoading?: boolean
  /** 왼쪽 아이콘 */
  leftIcon?: React.ReactNode
  /** 오른쪽 아이콘 */
  rightIcon?: React.ReactNode
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm h-8 gap-1.5',
  md: 'px-4 py-2 text-base h-10 gap-2',
  lg: 'px-6 py-3 text-lg h-12 gap-2.5',
}

const ICON_SIZE_CLASSES: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

const VARIANT_COLOR_CLASSES: Record<Variant, Record<Color, string>> = {
  solid: {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
    secondary:
      'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700',
    success:
      'bg-success-500 text-white hover:bg-success-600 active:bg-success-700',
    error:
      'bg-error-500 text-white hover:bg-error-600 active:bg-error-700',
    warning:
      'bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700',
    info: 'bg-info-500 text-white hover:bg-info-600 active:bg-info-700',
  },
  outline: {
    primary:
      'border border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
    secondary:
      'border border-secondary-500 text-secondary-600 hover:bg-secondary-50 active:bg-secondary-100',
    success:
      'border border-success-500 text-success-600 hover:bg-success-50 active:bg-success-100',
    error:
      'border border-error-500 text-error-600 hover:bg-error-50 active:bg-error-100',
    warning:
      'border border-warning-500 text-warning-600 hover:bg-warning-50 active:bg-warning-100',
    info: 'border border-info-500 text-info-600 hover:bg-info-50 active:bg-info-100',
  },
  ghost: {
    primary:
      'text-primary-600 hover:bg-primary-50 active:bg-primary-100',
    secondary:
      'text-secondary-600 hover:bg-secondary-50 active:bg-secondary-100',
    success:
      'text-success-600 hover:bg-success-50 active:bg-success-100',
    error: 'text-error-600 hover:bg-error-50 active:bg-error-100',
    warning:
      'text-warning-600 hover:bg-warning-50 active:bg-warning-100',
    info: 'text-info-600 hover:bg-info-50 active:bg-info-100',
  },
  soft: {
    primary:
      'bg-primary-50 text-primary-700 hover:bg-primary-100 active:bg-primary-200',
    secondary:
      'bg-secondary-50 text-secondary-700 hover:bg-secondary-100 active:bg-secondary-200',
    success:
      'bg-success-50 text-success-700 hover:bg-success-100 active:bg-success-200',
    error:
      'bg-error-50 text-error-700 hover:bg-error-100 active:bg-error-200',
    warning:
      'bg-warning-50 text-warning-700 hover:bg-warning-100 active:bg-warning-200',
    info: 'bg-info-50 text-info-700 hover:bg-info-100 active:bg-info-200',
  },
}

export const Button = React.memo(
  ({
    variant = 'solid',
    size = 'md',
    color = 'primary',
    fullWidth = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    disabled,
    className,
    children,
    ref,
    ...rest
  }: ButtonProps) => {
    const isDisabled = disabled || isLoading

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={classNames(
          'inline-flex cursor-pointer items-center justify-center font-medium',
          'rounded-md',
          'transition-all duration-150 ease-out',
          'hover:scale-[1.02] active:scale-[0.97]',
          'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none',
          'disabled:opacity-50',
          disabled && 'cursor-not-allowed',
          isLoading && 'cursor-wait',
          SIZE_CLASSES[size],
          VARIANT_COLOR_CLASSES[variant][color],
          fullWidth && 'w-full',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <svg
            className={classNames('animate-spin', ICON_SIZE_CLASSES[size])}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
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
        )}
        {!isLoading && leftIcon && (
          <span
            className={classNames(
              'inline-flex shrink-0',
              ICON_SIZE_CLASSES[size]
            )}
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span
            className={classNames(
              'inline-flex shrink-0',
              ICON_SIZE_CLASSES[size]
            )}
            aria-hidden="true"
          >
            {rightIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
