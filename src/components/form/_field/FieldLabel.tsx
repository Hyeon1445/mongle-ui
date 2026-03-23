import React from 'react'

export interface FieldLabelProps {
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}

export const FieldLabel = ({ htmlFor, required, children }: FieldLabelProps) => (
  <label htmlFor={htmlFor} className="text-sm font-medium text-neutral-700">
    {children}
    {required && (
      <span aria-hidden="true" className="ml-0.5 text-error-500">
        *
      </span>
    )}
  </label>
)
