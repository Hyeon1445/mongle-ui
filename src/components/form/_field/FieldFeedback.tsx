import { Typography } from '@/components/general/typography'

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
      <Typography id={errorId} variant="body2" color="error">
        {error}
      </Typography>
    )
  }
  if (description) {
    return (
      <Typography id={descriptionId} variant="body2" color="secondary">
        {description}
      </Typography>
    )
  }
  return null
}
