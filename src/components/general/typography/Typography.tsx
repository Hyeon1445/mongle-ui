import React from 'react'

import { classNames } from '@/lib/classNames'

export type TypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'

export type TypographyColor =
  | 'default'
  | 'secondary'
  | 'disabled'
  | 'primary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | 'inherit'

type TypographyElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'
  | 'label'

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    React.RefAttributes<HTMLElement> {
  /** 타이포그래피 프리셋 */
  variant?: TypographyVariant
  /** 텍스트 색상 */
  color?: TypographyColor
  /** 렌더링할 HTML 요소 */
  as?: TypographyElement
  /** 텍스트 말줄임 처리 */
  ellipsis?: boolean
}

const VARIANT_CLASSES: Record<TypographyVariant, string> = {
  heading1: 'text-5xl font-bold',
  heading2: 'text-4xl font-bold',
  heading3: 'text-3xl font-bold',
  heading4: 'text-2xl font-bold',
  subtitle1: 'text-xl font-bold',
  subtitle2: 'text-lg font-normal',
  body1: 'text-base font-normal',
  body2: 'text-sm font-normal',
  caption: 'text-xs font-normal',
  overline: 'text-xs font-bold uppercase tracking-wider',
}

const DEFAULT_ELEMENT: Record<TypographyVariant, TypographyElement> = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  subtitle1: 'h5',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
}

const COLOR_CLASSES: Record<TypographyColor, string> = {
  default: 'text-neutral-900',
  secondary: 'text-neutral-500',
  disabled: 'text-neutral-400',
  primary: 'text-primary-600',
  error: 'text-error-600',
  success: 'text-success-600',
  warning: 'text-warning-600',
  info: 'text-info-600',
  inherit: 'text-inherit',
}

export const Typography = React.memo(
  ({
    variant = 'body1',
    color = 'default',
    as,
    ellipsis = false,
    className,
    children,
    ref,
    ...rest
  }: TypographyProps) => {
    const Component: TypographyElement = as || DEFAULT_ELEMENT[variant]

    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={classNames(
          VARIANT_CLASSES[variant],
          COLOR_CLASSES[color],
          ellipsis && 'truncate',
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

Typography.displayName = 'Typography'
