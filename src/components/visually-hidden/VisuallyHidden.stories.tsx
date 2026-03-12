import { X } from 'lucide-react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Icon } from '@/components/icon'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

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

export const IconButton: Story = {
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
            {/* TODO: IconButton 컴포넌트로 교체 */}
            <Button variant="ghost" size="sm" className="rounded-full px-0 aspect-square">
              <Icon icon={X} size="sm" />
              <VisuallyHidden>Close dialog</VisuallyHidden>
            </Button>
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
