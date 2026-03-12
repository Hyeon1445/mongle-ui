import React from 'react'

import { classNames } from '@/lib/classNames'

export type BoxPadding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12

export type BoxRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

export interface BoxProps extends React.ComponentPropsWithRef<'div'> {
  /** 패딩 */
  padding?: BoxPadding
  /** 가로 패딩 */
  paddingX?: BoxPadding
  /** 세로 패딩 */
  paddingY?: BoxPadding
  /** border-radius */
  radius?: BoxRadius
}

const PADDING_CLASSES: Record<BoxPadding, string> = {
  0: 'p-0',
  1: 'p-1',
  2: 'p-2',
  3: 'p-3',
  4: 'p-4',
  5: 'p-5',
  6: 'p-6',
  8: 'p-8',
  10: 'p-10',
  12: 'p-12',
}

const PADDING_X_CLASSES: Record<BoxPadding, string> = {
  0: 'px-0',
  1: 'px-1',
  2: 'px-2',
  3: 'px-3',
  4: 'px-4',
  5: 'px-5',
  6: 'px-6',
  8: 'px-8',
  10: 'px-10',
  12: 'px-12',
}

const PADDING_Y_CLASSES: Record<BoxPadding, string> = {
  0: 'py-0',
  1: 'py-1',
  2: 'py-2',
  3: 'py-3',
  4: 'py-4',
  5: 'py-5',
  6: 'py-6',
  8: 'py-8',
  10: 'py-10',
  12: 'py-12',
}

const RADIUS_CLASSES: Record<BoxRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
}

export const Box = React.memo(
  ({
    padding,
    paddingX,
    paddingY,
    radius,
    className,
    children,
    ref,
    ...rest
  }: BoxProps) => (
    <div
      ref={ref}
      className={classNames(
        padding !== undefined && PADDING_CLASSES[padding],
        paddingX !== undefined && PADDING_X_CLASSES[paddingX],
        paddingY !== undefined && PADDING_Y_CLASSES[paddingY],
        radius && RADIUS_CLASSES[radius],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
)

Box.displayName = 'Box'
