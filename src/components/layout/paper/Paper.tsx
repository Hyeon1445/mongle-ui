import React from 'react'

import { classNames } from '@/lib/classNames'

export type PaperElevation = 0 | 1 | 2 | 3

export type PaperRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface PaperProps extends React.ComponentPropsWithRef<'div'> {
  /** 그림자 깊이 */
  elevation?: PaperElevation
  /** border-radius */
  radius?: PaperRadius
  /** 테두리 표시 */
  bordered?: boolean
}

const ELEVATION_CLASSES: Record<PaperElevation, string> = {
  0: '',
  1: 'shadow-sm',
  2: 'shadow-md',
  3: 'shadow-lg',
}

const RADIUS_CLASSES: Record<PaperRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
}

export const Paper = React.memo(
  ({
    elevation = 1,
    radius = 'xl',
    bordered = false,
    className,
    children,
    ref,
    ...rest
  }: PaperProps) => (
    <div
      ref={ref}
      className={classNames(
        'bg-white',
        ELEVATION_CLASSES[elevation],
        RADIUS_CLASSES[radius],
        bordered && 'border border-gray-200',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
)

Paper.displayName = 'Paper'
