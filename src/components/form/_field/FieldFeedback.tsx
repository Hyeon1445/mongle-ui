export interface FieldFeedbackProps {
  descriptionId: string
  errorId: string
  description?: string
  error?: string
}

export const FieldFeedback = ({
  descriptionId,
  errorId,
  description,
  error,
}: FieldFeedbackProps) => {
  if (error) {
    return (
      <p id={errorId} className="text-sm text-error-600">
        {error}
      </p>
    )
  }
  if (description) {
    return (
      <p id={descriptionId} className="text-sm text-gray-500">
        {description}
      </p>
    )
  }
  return null
}
