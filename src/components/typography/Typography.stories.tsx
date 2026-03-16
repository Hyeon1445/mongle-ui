import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/components/card'
import { Divider } from '@/components/divider'
import { Stack } from '@/components/stack'

import { Typography, TypographyVariant } from './Typography'

const meta = {
  title: 'General/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'heading1',
        'heading2',
        'heading3',
        'heading4',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
      ],
    },
    color: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'disabled',
        'primary',
        'error',
        'success',
        'warning',
        'info',
        'inherit',
      ],
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello, this is Mongle UI.',
  },
}

const VARIANT_INFO: {
  variant: TypographyVariant
  label: string
  desc: string
}[] = [
  { variant: 'heading1', label: 'Heading 1', desc: '3rem / Bold' },
  { variant: 'heading2', label: 'Heading 2', desc: '2.25rem / Bold' },
  { variant: 'heading3', label: 'Heading 3', desc: '1.875rem / Semibold' },
  { variant: 'heading4', label: 'Heading 4', desc: '1.5rem / Semibold' },
  { variant: 'subtitle1', label: 'Subtitle 1', desc: '1.25rem / Semibold' },
  { variant: 'subtitle2', label: 'Subtitle 2', desc: '1.125rem / Medium' },
  { variant: 'body1', label: 'Body 1', desc: '1rem / Normal' },
  { variant: 'body2', label: 'Body 2', desc: '0.875rem / Normal' },
  { variant: 'caption', label: 'Caption', desc: '0.75rem / Normal' },
  { variant: 'overline', label: 'Overline', desc: '0.75rem / Semibold' },
]

export const Variants: Story = {
  render: () => (
    <Stack gap={0}>
      {VARIANT_INFO.map(({ variant, label, desc }) => (
        <div
          key={variant}
          className="flex items-baseline gap-6 border-b border-gray-100 py-4 last:border-b-0"
        >
          <Typography variant="caption" color="disabled" className="w-28 shrink-0">{desc}</Typography>
          <Typography variant={variant}>
            {label} — The quick brown fox jumps over the lazy dog
          </Typography>
        </div>
      ))}
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="horizontal" gap={6} wrap>
      {(
        [
          ['default', 'Default'],
          ['secondary', 'Secondary'],
          ['disabled', 'Disabled'],
          ['primary', 'Primary'],
          ['error', 'Error'],
          ['success', 'Success'],
          ['warning', 'Warning'],
          ['info', 'Info'],
        ] as const
      ).map(([color, label]) => (
        <Stack key={color} align="center" gap={2}>
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50">
            <Typography variant="heading4" color={color}>
              Aa
            </Typography>
          </div>
          <Typography variant="caption" color="secondary">
            {label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  ),
}

export const Ellipsis: Story = {
  render: () => (
    <Stack>
      <Card className="max-w-xs">
        <Card.Header>
          <Typography variant="subtitle2">With ellipsis</Typography>
        </Card.Header>
        <Card.Content>
          <Typography ellipsis color="secondary">
            This text is very long and will be truncated with an ellipsis when it exceeds the container width.
          </Typography>
        </Card.Content>
      </Card>
      <Card className="max-w-xs">
        <Card.Header>
          <Typography variant="subtitle2">Without ellipsis</Typography>
        </Card.Header>
        <Card.Content>
          <Typography color="secondary">
            This text is very long and will be truncated with an ellipsis when it exceeds the container width.
          </Typography>
        </Card.Content>
      </Card>
    </Stack>
  ),
}

export const AsOverride: Story = {
  render: () => (
    <Stack>
      {(
        [
          ['heading1', 'p', 'heading1 style as <p> tag'],
          ['body1', 'span', 'body1 style as <span> tag'],
          ['caption', 'label', 'caption style as <label> tag'],
        ] as const
      ).map(([variant, as, text]) => (
        <div
          key={variant}
          className="flex items-baseline gap-4 border-b border-gray-100 py-4 last:border-b-0"
        >
          <div className="w-40 shrink-0 rounded-md bg-gray-100 px-2 py-1 text-center">
            <Typography variant="caption" color="disabled" className="font-mono">
              {variant} → &lt;{as}&gt;
            </Typography>
          </div>
          <Typography variant={variant} as={as}>
            {text}
          </Typography>
        </div>
      ))}
    </Stack>
  ),
}

export const Article: Story = {
  render: () => (
    <Card className="max-w-lg">
      <Card.Header>
        <Stack gap={3}>
          <Typography variant="overline" color="primary">
            Design System
          </Typography>
          <Typography variant="heading2">Mongle UI</Typography>
          <Typography variant="subtitle1" color="secondary">
            A warm and cozy React component library
          </Typography>
        </Stack>
      </Card.Header>
      <Card.Content>
        <Stack gap={2}>
          <Typography variant="body1">
            Mongle UI is a design system built to deliver a comfortable user experience. It features coral-toned primary colors, soft shadows, and smooth animations.
          </Typography>
          <Typography variant="body2" color="secondary">
            We aim to provide accessible components that anyone can use with ease.
          </Typography>
        </Stack>
      </Card.Content>
      <Divider color="light" />
      <Card.Footer>
        <Typography variant="caption" color="disabled">
          Last updated: March 2026
        </Typography>
      </Card.Footer>
    </Card>
  ),
}
