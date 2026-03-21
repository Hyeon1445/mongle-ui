import { X } from 'lucide-react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/components/layout/card'
import { IconButton } from '@/components/general/icon-button'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { VisuallyHidden } from './VisuallyHidden'

const meta = {
  title: 'Utilities/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
} satisfies Meta<typeof VisuallyHidden>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This text is visually hidden but accessible to screen readers',
  },
  render: (args) => (
    <Stack gap={2}>
      <Typography variant="body2" color="secondary">
        There is hidden text below this line. Inspect the DOM or use a screen
        reader to find it.
      </Typography>
      <VisuallyHidden {...args} />
    </Stack>
  ),
}

export const IconButtonExample: Story = {
  name: 'Icon button with accessible label',
  args: {
    children: 'Close dialog',
  },
  render: () => (
    <Stack gap={3}>
      <Typography variant="body2" color="secondary">
        Icon-only buttons need accessible labels for screen readers.
      </Typography>
      <Card variant="outlined" className="max-w-xs">
        <Card.Header>
          <Stack direction="horizontal" justify="between" align="center">
            <Typography variant="subtitle2">Dialog Title</Typography>
            <IconButton icon={X} aria-label="Close dialog" variant="ghost" size="sm" />
          </Stack>
        </Card.Header>
        <Card.Content>
          <Typography variant="body2" color="secondary">
            The close button above has a visually hidden label.
          </Typography>
        </Card.Content>
      </Card>
    </Stack>
  ),
}
