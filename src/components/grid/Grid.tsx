import React from 'react'

import { classNames } from '@/lib/classNames'

export type GridGap =
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

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12

export type GridAlign =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'

export type GridJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'

type GridElement = 'div' | 'section' | 'article' | 'nav' | 'ul' | 'ol'

export interface GridProps
  extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>
  /** 컬럼 수 */
  columns?: GridColumns
  /** 자식 요소 간 간격 (tailwind spacing 토큰) */
  gap?: GridGap
  /** 아이템 정렬 (align-items) */
  align?: GridAlign
  /** 아이템 정렬 (justify-items) */
  justify?: GridJustify
  /** 렌더링할 HTML 요소 */
  as?: GridElement
}

const COLUMNS_CLASSES: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
}

const GAP_CLASSES: Record<GridGap, string> = {
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

const ALIGN_CLASSES: Record<GridAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

const JUSTIFY_CLASSES: Record<GridJustify, string> = {
  start: 'justify-items-start',
  center: 'justify-items-center',
  end: 'justify-items-end',
  stretch: 'justify-items-stretch',
}

export const Grid = React.memo(
  ({
    columns = 1,
    gap = 4,
    align,
    justify,
    as: Component = 'div',
    className,
    children,
    ref,
    ...rest
  }: GridProps) => {
    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={classNames(
          'grid',
          COLUMNS_CLASSES[columns],
          GAP_CLASSES[gap],
          align && ALIGN_CLASSES[align],
          justify && JUSTIFY_CLASSES[justify],
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

Grid.displayName = 'Grid'
