import { useId } from 'react'

export interface FieldIds {
  inputId: string
  descriptionId: string
  errorId: string
}

export const useFieldIds = (idProp?: string): FieldIds => {
  const generated: string = useId()
  const inputId: string = idProp ?? generated
  return {
    inputId,
    descriptionId: `${inputId}-description`,
    errorId: `${inputId}-error`,
  }
}

export const getDescribedBy = (
  hasError: boolean,
  errorId: string,
  description: string | undefined,
  descriptionId: string,
): string | undefined => {
  if (hasError) return errorId
  if (description) return descriptionId
  return undefined
}
