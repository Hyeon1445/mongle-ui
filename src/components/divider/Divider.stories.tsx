import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

import { Divider } from './Divider'

const meta = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    color: {
      control: 'select',
      options: ['light', 'default', 'strong'],
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Colors: Story = {
  render: () => (
    <Stack gap={6}>
      {(['light', 'default', 'strong'] as const).map((color) => (
        <div key={color}>
          <Typography variant="caption" color="disabled" className="mb-2">
            {color}
          </Typography>
          <Divider color={color} />
        </div>
      ))}
    </Stack>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Stack direction="horizontal" align="center" gap={4} className="h-6">
      <Typography variant="body2">Item 1</Typography>
      <Divider orientation="vertical" />
      <Typography variant="body2">Item 2</Typography>
      <Divider orientation="vertical" />
      <Typography variant="body2">Item 3</Typography>
    </Stack>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <Stack gap={8}>
      <Divider label="OR" />
      <Divider label="or" />
      <Divider label="Section" color="strong" />
    </Stack>
  ),
}

export const ProfileCard: Story = {
  render: () => (
    <Card className="max-w-sm">
      <Card.Header>
        <Stack direction="horizontal" align="center" gap={4}>
          <Avatar name="John Doe" className="shrink-0" />
          <Stack gap={0}>
            <Stack direction="horizontal" align="center" gap={2}>
              <Typography variant="subtitle2">John Doe</Typography>
              <Badge size="sm" color="primary">
                Admin
              </Badge>
            </Stack>
            <Typography variant="body2" color="secondary">
              Frontend Developer
            </Typography>
          </Stack>
        </Stack>
      </Card.Header>
      <Divider />
      <Card.Content>
        <Stack gap={3}>
          <Stack direction="horizontal" justify="between">
            <Typography variant="body2" color="secondary">
              Email
            </Typography>
            <Typography variant="body2">hong@example.com</Typography>
          </Stack>
          <Stack direction="horizontal" justify="between">
            <Typography variant="body2" color="secondary">
              Team
            </Typography>
            <Typography variant="body2">Design System</Typography>
          </Stack>
          <Stack direction="horizontal" justify="between">
            <Typography variant="body2" color="secondary">
              Joined
            </Typography>
            <Typography variant="body2">Mar 15, 2024</Typography>
          </Stack>
        </Stack>
      </Card.Content>
      <Divider color="light" />
      <Card.Content>
        <Stack direction="horizontal" gap={4} justify="center">
          <Stack align="center" gap={0}>
            <Typography variant="subtitle2">42</Typography>
            <Typography variant="caption" color="disabled">
              Posts
            </Typography>
          </Stack>
          <Divider orientation="vertical" className="h-8" />
          <Stack align="center" gap={0}>
            <Typography variant="subtitle2">128</Typography>
            <Typography variant="caption" color="disabled">
              Followers
            </Typography>
          </Stack>
          <Divider orientation="vertical" className="h-8" />
          <Stack align="center" gap={0}>
            <Typography variant="subtitle2">56</Typography>
            <Typography variant="caption" color="disabled">
              Following
            </Typography>
          </Stack>
        </Stack>
      </Card.Content>
      <Divider color="light" />
      <Card.Footer>
        <Stack direction="horizontal" gap={3}>
          <Button variant="soft" fullWidth>
            Message
          </Button>
          <Button fullWidth>Follow</Button>
        </Stack>
      </Card.Footer>
    </Card>
  ),
}
