// Styles (consumers can import 'mongle-ui/styles.css' directly)
import './index.css'

// Types
export type { Size, Variant, Color } from './types'

// General
export { Button } from './components/general/button/Button'
export type { ButtonProps } from './components/general/button/Button'

export { Icon } from './components/general/icon/Icon'
export type { IconProps, IconSize, IconColor } from './components/general/icon/Icon'

export { IconButton } from './components/general/icon-button/IconButton'
export type { IconButtonProps } from './components/general/icon-button/IconButton'

export { Typography } from './components/general/typography/Typography'
export type { TypographyProps, TypographyVariant, TypographyColor } from './components/general/typography/Typography'

// Layout
export { Card } from './components/layout/card/Card'
export type { CardProps, CardVariant } from './components/layout/card/Card'

export { CardHeader } from './components/layout/card/CardHeader'
export type { CardHeaderProps } from './components/layout/card/CardHeader'

export { CardContent } from './components/layout/card/CardContent'
export type { CardContentProps } from './components/layout/card/CardContent'

export { CardFooter } from './components/layout/card/CardFooter'
export type { CardFooterProps } from './components/layout/card/CardFooter'

export { Divider } from './components/layout/divider/Divider'
export type { DividerProps, DividerOrientation, DividerColor } from './components/layout/divider/Divider'

export { Grid } from './components/layout/grid/Grid'
export type { GridProps, GridGap, GridColumns, GridAlign, GridJustify } from './components/layout/grid/Grid'

export { Paper } from './components/layout/paper/Paper'
export type { PaperProps, PaperElevation, PaperRadius } from './components/layout/paper/Paper'

export { Stack } from './components/layout/stack/Stack'
export type { StackProps, StackDirection, StackGap, StackAlign, StackJustify } from './components/layout/stack/Stack'

// Feedback
export { Badge } from './components/feedback/badge/Badge'
export type { BadgeProps } from './components/feedback/badge/Badge'

export { Spinner } from './components/feedback/spinner/Spinner'
export type { SpinnerProps } from './components/feedback/spinner/Spinner'

export { ProgressBar } from './components/feedback/progress-bar/ProgressBar'
export type { ProgressBarProps } from './components/feedback/progress-bar/ProgressBar'

export { Skeleton } from './components/feedback/skeleton/Skeleton'
export type { SkeletonProps, SkeletonVariant } from './components/feedback/skeleton/Skeleton'

// Form
export { TextField } from './components/form/text-field/TextField'
export type { TextFieldProps } from './components/form/text-field/TextField'

export { PasswordField } from './components/form/password-field/PasswordField'
export type { PasswordFieldProps } from './components/form/password-field/PasswordField'

export { NumberField } from './components/form/number-field/NumberField'
export type { NumberFieldProps } from './components/form/number-field/NumberField'

// Data Display
export { Avatar } from './components/data-display/avatar/Avatar'
export type { AvatarProps, AvatarColor } from './components/data-display/avatar/Avatar'

export { AvatarGroup } from './components/data-display/avatar-group/AvatarGroup'
export type { AvatarGroupProps } from './components/data-display/avatar-group/AvatarGroup'

// Utilities
export { FocusTrap } from './components/utilities/focus-trap/FocusTrap'
export type { FocusTrapProps } from './components/utilities/focus-trap/FocusTrap'

export { Portal } from './components/utilities/portal/Portal'
export type { PortalProps } from './components/utilities/portal/Portal'

export { Transition } from './components/utilities/transition/Transition'
export type { TransitionProps, TransitionType, TransitionDirection, TransitionStatus } from './components/utilities/transition/Transition'

export { VisuallyHidden } from './components/utilities/visually-hidden/VisuallyHidden'
export type { VisuallyHiddenProps } from './components/utilities/visually-hidden/VisuallyHidden'
