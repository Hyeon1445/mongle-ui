import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/components/feedback/badge'
import { Button } from '@/components/general/button'
import { Divider } from '@/components/layout/divider'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { Paper } from './Paper'

const meta = {
  title: 'Layout/Paper',
  component: Paper,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: 'select',
      options: [0, 1, 2, 3],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    bordered: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Paper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    elevation: 1,
    radius: 'xl',
    className: 'p-6',
  },
  render: (args) => (
    <Paper {...args}>
      <Typography variant="body1">Paper component</Typography>
    </Paper>
  ),
}

export const Elevations: Story = {
  render: () => (
    <Stack direction="horizontal" gap={6} className="flex-wrap">
      {([0, 1, 2, 3] as const).map((el) => (
        <Paper key={el} elevation={el} className="p-6">
          <Typography variant="body2">elevation={el}</Typography>
        </Paper>
      ))}
    </Stack>
  ),
}

export const Bordered: Story = {
  render: () => (
    <Stack direction="horizontal" gap={6}>
      <Paper elevation={0} bordered className="p-6">
        <Typography variant="body2">bordered, elevation=0</Typography>
      </Paper>
      <Paper elevation={1} bordered className="p-6">
        <Typography variant="body2">bordered, elevation=1</Typography>
      </Paper>
    </Stack>
  ),
}

export const Radius: Story = {
  render: () => (
    <Stack direction="horizontal" gap={4} className="flex-wrap">
      {(['none', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((r) => (
        <Paper key={r} elevation={2} radius={r} className="p-4">
          <Typography variant="caption">{r}</Typography>
        </Paper>
      ))}
    </Stack>
  ),
}

export const NotificationPanel: Story = {
  render: () => (
    <Paper elevation={2} radius="2xl" className="max-w-sm p-6">
      <Stack gap={4}>
        <Stack direction="horizontal" justify="between" align="center">
          <Typography variant="subtitle1">Notifications</Typography>
          <Badge size="sm" color="primary">
            3
          </Badge>
        </Stack>
        <Divider color="light" />
        <Stack gap={3}>
          <Stack gap={1}>
            <Typography variant="body2">You have a new comment</Typography>
            <Typography variant="caption" color="disabled">
              2m ago
            </Typography>
          </Stack>
          <Divider color="light" />
          <Stack gap={1}>
            <Typography variant="body2">New follow request</Typography>
            <Typography variant="caption" color="disabled">
              15m ago
            </Typography>
          </Stack>
          <Divider color="light" />
          <Stack gap={1}>
            <Typography variant="body2">Your post was shared</Typography>
            <Typography variant="caption" color="disabled">
              1h ago
            </Typography>
          </Stack>
        </Stack>
        <Button variant="ghost" size="sm" fullWidth>
          Mark all as read
        </Button>
      </Stack>
    </Paper>
  ),
}
