import { classNames } from '@/lib/classNames'

import type { Size } from '@/types'

/** 인풋 기본 사이즈 (height + text + radius). padding은 각 컴포넌트에서 추가 */
export const INPUT_BASE_SIZE: Record<Size, string> = {
  sm: 'h-8 text-sm rounded-lg',
  md: 'h-10 text-base rounded-xl',
  lg: 'h-12 text-lg rounded-xl',
}

/** 기본 좌우 padding */
export const INPUT_PADDING: Record<Size, string> = {
  sm: 'px-3',
  md: 'px-4',
  lg: 'px-5',
}

/** 인풋 기본 스타일 (border, bg, color, focus, error, disabled) */
export const getInputClasses = (
  hasError: boolean,
  disabled?: boolean,
): string =>
  classNames(
    'w-full border bg-white text-neutral-900 placeholder:text-neutral-400',
    'transition-all duration-150 focus:outline-none',
    hasError
      ? 'border-error-500 caret-error-500 focus:border-error-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.2)]'
      : 'border-neutral-200 caret-primary-500 focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(255,139,109,0.2)]',
    'read-only:bg-neutral-50 read-only:cursor-default',
    disabled && 'cursor-not-allowed opacity-50',
  )
