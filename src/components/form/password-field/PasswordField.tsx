import React, { useCallback, useState } from 'react'

import { Eye, EyeOff } from 'lucide-react'

import { classNames } from '@/lib/classNames'
import { Icon } from '@/components/icon'
import { FieldFeedback } from '@/components/form/_field/FieldFeedback'
import { FieldLabel } from '@/components/form/_field/FieldLabel'
import { getDescribedBy, useFieldIds } from '@/lib/fieldUtils'
import {
  getInputClasses,
  INPUT_BASE_SIZE,
  INPUT_PADDING,
} from '@/lib/fieldStyles'

import type { Size } from '@/types'

export interface PasswordFieldProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size' | 'type'> {
  /** 라벨 */
  label?: string
  /** 도움말 텍스트 (error가 없을 때 표시) */
  description?: string
  /** 에러 메시지 (있으면 에러 상태) */
  error?: string
  /** 크기 */
  size?: Size
  /** 전체 너비 */
  fullWidth?: boolean
}

const TOGGLE_PADDING: Record<Size, string> = {
  sm: 'pr-9',
  md: 'pr-10',
  lg: 'pr-11',
}

const TOGGLE_SIZE: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-5 w-5',
}

export const PasswordField = React.memo(
  ({
    label,
    description,
    error,
    size = 'md',
    fullWidth = false,
    disabled,
    required,
    className,
    id: idProp,
    ref,
    ...rest
  }: PasswordFieldProps) => {
    const { inputId, descriptionId, errorId } = useFieldIds(idProp)
    const [visible, setVisible] = useState<boolean>(false)

    const hasError: boolean = Boolean(error)
    const describedBy = getDescribedBy(hasError, errorId, description, descriptionId)

    const handleToggle: React.MouseEventHandler<HTMLButtonElement> =
      useCallback((e) => {
        e.preventDefault()
        setVisible((prev) => !prev)
      }, [])

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
          <input
            ref={ref}
            id={inputId}
            type={visible ? 'text' : 'password'}
            disabled={disabled}
            required={required}
            aria-describedby={describedBy}
            aria-invalid={hasError || undefined}
            className={classNames(
              getInputClasses(hasError, disabled),
              INPUT_BASE_SIZE[size],
              INPUT_PADDING[size],
              TOGGLE_PADDING[size],
              className,
            )}
            {...rest}
          />
          <button
            type="button"
            tabIndex={-1}
            disabled={disabled}
            aria-label={visible ? 'Hide password' : 'Show password'}
            onClick={handleToggle}
            className={classNames(
              'absolute right-3 flex items-center justify-center text-gray-400',
              'transition-colors duration-150 hover:text-gray-600',
              'focus-visible:outline-none',
              disabled && 'pointer-events-none opacity-50',
              TOGGLE_SIZE[size],
            )}
          >
            <Icon
              icon={visible ? EyeOff : Eye}
              className="h-full w-full"
              aria-hidden
            />
          </button>
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

PasswordField.displayName = 'PasswordField'
