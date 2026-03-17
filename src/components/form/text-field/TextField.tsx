import React from 'react'

import { classNames } from '@/lib/classNames'
import { FieldFeedback } from '@/components/form/_field/FieldFeedback'
import { FieldLabel } from '@/components/form/_field/FieldLabel'
import { getDescribedBy, useFieldIds } from '@/lib/fieldUtils'
import {
  getInputClasses,
  INPUT_BASE_SIZE,
  INPUT_PADDING,
} from '@/lib/fieldStyles'

import type { Size } from '@/types'

export interface TextFieldProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  /** 라벨 */
  label?: string
  /** 도움말 텍스트 (error가 없을 때 표시) */
  description?: string
  /** 에러 메시지 (있으면 에러 상태) */
  error?: string
  /** 크기 */
  size?: Size
  /** 왼쪽 장식 요소 */
  leftElement?: React.ReactNode
  /** 오른쪽 장식 요소 */
  rightElement?: React.ReactNode
  /** 전체 너비 */
  fullWidth?: boolean
}

const ELEMENT_PADDING: Record<Size, { left: string; right: string }> = {
  sm: { left: 'pl-8', right: 'pr-8' },
  md: { left: 'pl-10', right: 'pr-10' },
  lg: { left: 'pl-11', right: 'pr-11' },
}

const ELEMENT_SIZE: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-5 w-5',
}

export const TextField = React.memo(
  ({
    label,
    description,
    error,
    size = 'md',
    leftElement,
    rightElement,
    fullWidth = false,
    disabled,
    required,
    className,
    id: idProp,
    ref,
    ...rest
  }: TextFieldProps) => {
    const { inputId, descriptionId, errorId } = useFieldIds(idProp)

    const hasError: boolean = Boolean(error)
    const describedBy = getDescribedBy(hasError, errorId, description, descriptionId)

    return (
      <div
        className={classNames(
          'flex flex-col gap-1',
          fullWidth ? 'w-full' : 'w-64',
        )}
      >
        {label && (
          <FieldLabel htmlFor={inputId} required={required}>
            {label}
          </FieldLabel>
        )}
        <div className="relative flex items-center">
          {leftElement && (
            <span
              className={classNames(
                'absolute left-3 flex items-center justify-center text-gray-400',
                ELEMENT_SIZE[size],
              )}
            >
              {leftElement}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-describedby={describedBy}
            aria-invalid={hasError || undefined}
            className={classNames(
              getInputClasses(hasError, disabled),
              INPUT_BASE_SIZE[size],
              INPUT_PADDING[size],
              leftElement && ELEMENT_PADDING[size].left,
              rightElement && ELEMENT_PADDING[size].right,
              className,
            )}
            {...rest}
          />
          {rightElement && (
            <span
              className={classNames(
                'absolute right-3 flex items-center justify-center text-gray-400',
                ELEMENT_SIZE[size],
              )}
            >
              {rightElement}
            </span>
          )}
        </div>
        <FieldFeedback
          descriptionId={descriptionId}
          errorId={errorId}
          description={description}
          error={error}
        />
      </div>
    )
  },
)

TextField.displayName = 'TextField'
