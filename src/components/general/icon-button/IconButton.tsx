import React, { useCallback } from 'react'

import type { LucideIcon } from 'lucide-react'

import { classNames } from '@/lib/classNames'
import { Icon } from '@/components/general/icon'
import { Spinner } from '@/components/feedback/spinner'

import type { Color, Size, Variant } from '@/types'

export interface IconButtonProps
  extends Omit<React.ComponentPropsWithRef<'button'>, 'children'> {
  /** lucide-react 아이콘 */
  icon: LucideIcon
  /** 버튼의 시각적 스타일 */
  variant?: Variant
  /** 버튼의 크기 */
  size?: Size
  /** 버튼의 색상 */
  color?: Color
  /** 로딩 상태 */
  isLoading?: boolean
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'h-8 w-8 rounded-lg',
  md: 'h-10 w-10 rounded-xl',
  lg: 'h-12 w-12 rounded-xl',
}

const ICON_SIZE_CLASSES: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

const VARIANT_COLOR_CLASSES: Record<Variant, Record<Color, string>> = {
  solid: {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
    success: 'bg-success-500 text-white hover:bg-success-600',
    error: 'bg-error-500 text-white hover:bg-error-600',
    warning: 'bg-warning-500 text-white hover:bg-warning-600',
    info: 'bg-info-500 text-white hover:bg-info-600',
    neutral: 'bg-neutral-500 text-white hover:bg-neutral-600',
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
    neutral:
      'border border-neutral-400 text-neutral-600 hover:bg-neutral-50 active:bg-neutral-100',
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
    neutral: 'text-neutral-600 hover:bg-neutral-50 active:bg-neutral-100',
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
    neutral:
      'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-300',
  },
}

export const IconButton = React.memo(
  ({
    icon,
    variant = 'ghost',
    size = 'md',
    color = 'primary',
    isLoading = false,
    disabled,
    className,
    ref,
    onMouseMove,
    onMouseDown,
    onMouseLeave,
    ...rest
  }: IconButtonProps) => {
    const isDisabled: boolean = disabled || isLoading

    const handleMouseMove: React.MouseEventHandler<HTMLButtonElement> =
      useCallback(
        (e) => {
          if (isDisabled) return
          const rect: DOMRect = e.currentTarget.getBoundingClientRect()
          const x: number = e.clientX - rect.left
          const y: number = e.clientY - rect.top
          e.currentTarget.style.setProperty('--glow-x', `${x}px`)
          e.currentTarget.style.setProperty('--glow-y', `${y}px`)
          e.currentTarget.style.setProperty('--glow-opacity', '1')
          onMouseMove?.(e)
        },
        [isDisabled, onMouseMove],
      )

    const handleMouseDown: React.MouseEventHandler<HTMLButtonElement> =
      useCallback(
        (e) => {
          if (isDisabled) return
          const button: HTMLElement = e.currentTarget
          const rect: DOMRect = button.getBoundingClientRect()
          const x: number = e.clientX - rect.left
          const y: number = e.clientY - rect.top
          const diameter: number =
            Math.max(rect.width, rect.height) * 2.5

          const ripple: HTMLSpanElement | null =
            button.querySelector<HTMLSpanElement>('[data-ripple]')
          if (!ripple) return

          ripple.style.width = `${diameter}px`
          ripple.style.height = `${diameter}px`
          ripple.style.left = `${x - diameter / 2}px`
          ripple.style.top = `${y - diameter / 2}px`

          ripple.getAnimations?.().forEach((a) => a.cancel())
          ripple.animate?.(
            [
              { transform: 'scale(0)', opacity: '0.6', filter: 'blur(2px)' },
              {
                transform: 'scale(0.6)',
                opacity: '0.4',
                filter: 'blur(6px)',
                offset: 0.4,
              },
              { transform: 'scale(1)', opacity: '0', filter: 'blur(10px)' },
            ],
            { duration: 700, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', fill: 'forwards' },
          )

          onMouseDown?.(e)
        },
        [isDisabled, onMouseDown],
      )

    const handleMouseLeave: React.MouseEventHandler<HTMLButtonElement> =
      useCallback(
        (e) => {
          e.currentTarget.style.setProperty('--glow-opacity', '0')
          onMouseLeave?.(e)
        },
        [onMouseLeave],
      )

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={classNames(
          'relative inline-flex cursor-pointer items-center justify-center overflow-hidden',
          'transition-all duration-200',
          !isDisabled && 'hover:scale-[1.02] active:scale-[0.97]',
          'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none',
          'disabled:opacity-50',
          disabled && 'cursor-not-allowed',
          isLoading && 'cursor-wait',
          SIZE_CLASSES[size],
          VARIANT_COLOR_CLASSES[variant][color],
          className,
        )}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), white 0%, transparent 70%)',
            opacity: 'calc(var(--glow-opacity, 0) * 0.4)',
            mixBlendMode: 'soft-light',
          }}
        />
        <span
          data-ripple
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full opacity-0"
          style={{
            background:
              'radial-gradient(circle, white 0%, transparent 50%)',
            mixBlendMode: 'soft-light',
          }}
        />
        {isLoading ? (
          <Spinner
            className={classNames(
              'relative text-current',
              ICON_SIZE_CLASSES[size],
            )}
            aria-hidden="true"
          />
        ) : (
          <Icon icon={icon} size={size} className="relative text-current" />
        )}
      </button>
    )
  },
)

IconButton.displayName = 'IconButton'
