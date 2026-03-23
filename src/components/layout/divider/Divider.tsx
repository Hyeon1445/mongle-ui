import React from 'react'

import { classNames } from '@/lib/classNames'

export type DividerOrientation = 'horizontal' | 'vertical'

export type DividerColor = 'default' | 'light' | 'strong'

export interface DividerProps extends React.ComponentPropsWithRef<'hr'> {
  /** 방향 */
  orientation?: DividerOrientation
  /** 색상 강도 */
  color?: DividerColor
  /** 라벨 텍스트 (horizontal만 지원) */
  label?: string
}

const COLOR_CLASSES: Record<DividerColor, string> = {
  light: 'border-neutral-100',
  default: 'border-neutral-200',
  strong: 'border-neutral-300',
}

export const Divider = React.memo(
  ({
    orientation = 'horizontal',
    color = 'default',
    label,
    className,
    ref,
    ...rest
  }: DividerProps) => {
    if (label && orientation === 'horizontal') {
      return (
        <div
          role="separator"
          className={classNames('flex items-center gap-4', className)}
          {...(rest as React.HTMLAttributes<HTMLDivElement>)}
        >
          <hr
            role="presentation"
            className={classNames(
              'flex-1 border-t',
              COLOR_CLASSES[color],
            )}
          />
          <span className="shrink-0 text-xs text-neutral-400">{label}</span>
          <hr
            role="presentation"
            className={classNames(
              'flex-1 border-t',
              COLOR_CLASSES[color],
            )}
          />
        </div>
      )
    }

    if (orientation === 'vertical') {
      return (
        <hr
          ref={ref}
          role="separator"
          aria-orientation="vertical"
          className={classNames(
            'inline-block h-auto self-stretch border-t-0 border-l',
            COLOR_CLASSES[color],
            className,
          )}
          {...rest}
        />
      )
    }

    return (
      <hr
        ref={ref}
        role="separator"
        className={classNames(
          'w-full border-t',
          COLOR_CLASSES[color],
          className,
        )}
        {...rest}
      />
    )
  },
)

Divider.displayName = 'Divider'
