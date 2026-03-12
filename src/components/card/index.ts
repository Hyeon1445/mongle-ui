import { Card as CardRoot } from './Card'
import { CardHeader } from './CardHeader'
import { CardContent } from './CardContent'
import { CardFooter } from './CardFooter'

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
})

export type { CardProps, CardVariant } from './Card'
export type { CardHeaderProps } from './CardHeader'
export type { CardContentProps } from './CardContent'
export type { CardFooterProps } from './CardFooter'
