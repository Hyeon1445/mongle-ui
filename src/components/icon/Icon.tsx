import React from 'react'

import type { LucideIcon } from 'lucide-react'

import { classNames } from '@/lib/classNames'

import type { Color, Size } from '@/types'

export type IconSize = Size | number

export type IconColor = Color | 'muted'

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  /** lucide-react 아이콘 */
  icon: LucideIcon
  /** 아이콘의 크기 (토큰 또는 px 숫자) */
  size?: IconSize
  /** 아이콘의 색상 */
  color?: IconColor
  /** 스크린 리더용 레이블 (없으면 장식용으로 간주) */
  label?: string
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

const COLOR_CLASSES: Record<IconColor, string> = {
  primary: 'text-primary-500',
  secondary: 'text-secondary-500',
  success: 'text-success-500',
  error: 'text-error-500',
  warning: 'text-warning-500',
  info: 'text-info-500',
  muted: 'text-gray-400',
}

const isTokenSize = (size: IconSize): size is Size =>
  typeof size === 'string'

export const Icon = React.memo(
  ({
    icon: LucideIcon,
    size = 'md',
    color,
    label,
    className,
    style,
    ...rest
  }: IconProps) => {
    const numericSize: number | undefined = isTokenSize(size) ? undefined : size
    const sizeClass: string | undefined = isTokenSize(size) ? SIZE_CLASSES[size] : undefined

    return (
      <LucideIcon
        className={classNames(
          sizeClass,
          color && COLOR_CLASSES[color],
          className,
        )}
        {...(numericSize && {
          style: { width: numericSize, height: numericSize, ...style },
        })}
        {...(!numericSize && style && { style })}
        aria-hidden={!label}
        aria-label={label}
        role={label ? 'img' : undefined}
        {...rest}
      />
    )
  },
)

Icon.displayName = 'Icon'
