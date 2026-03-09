import React from 'react'

import { classNames } from '@/lib/classNames'

export type StackDirection = 'vertical' | 'horizontal'

export type StackGap =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16

export type StackAlign =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'
  | 'baseline'

export type StackJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'

type StackElement = 'div' | 'section' | 'article' | 'nav' | 'ul' | 'ol'

export interface StackProps
  extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>
  /** 방향 */
  direction?: StackDirection
  /** 자식 요소 간 간격 (tailwind spacing 토큰) */
  gap?: StackGap
  /** 교차축 정렬 */
  align?: StackAlign
  /** 주축 정렬 */
  justify?: StackJustify
  /** 렌더링할 HTML 요소 */
  as?: StackElement
  /** 자식 요소 줄바꿈 허용 */
  wrap?: boolean
}

const DIRECTION_CLASSES: Record<StackDirection, string> = {
  vertical: 'flex-col',
  horizontal: 'flex-row',
}

const SPACING_CLASSES: Record<StackGap, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
  16: 'gap-16',
}

const ALIGN_CLASSES: Record<StackAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
}

const JUSTIFY_CLASSES: Record<StackJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

export const Stack = React.memo(
  ({
    direction = 'vertical',
    gap = 4,
    align,
    justify,
    as: Component = 'div',
    wrap = false,
    className,
    children,
    ref,
    ...rest
  }: StackProps) => {
    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={classNames(
          'flex',
          DIRECTION_CLASSES[direction],
          SPACING_CLASSES[gap],
          align && ALIGN_CLASSES[align],
          justify && JUSTIFY_CLASSES[justify],
          wrap && 'flex-wrap',
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

Stack.displayName = 'Stack'
