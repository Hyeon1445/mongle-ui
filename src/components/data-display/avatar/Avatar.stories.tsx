import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/components/feedback/badge'
import { Card } from '@/components/layout/card'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { Avatar } from './Avatar'

const meta = {
  title: 'General/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'neutral'],
    },
    src: { control: 'text' },
    name: { control: 'text' },
    alt: { control: 'text' },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'MG',
    size: 'md',
    color: 'primary',
  },
  render: (args) => <Avatar {...args} />,
}

export const WithImage: Story = {
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Avatar
        src="https://api.dicebear.com/9.x/thumbs/svg?seed=Mongle"
        alt="Mongle"
        size="sm"
      />
      <Avatar
        src="https://api.dicebear.com/9.x/thumbs/svg?seed=Mongle"
        alt="Mongle"
        size="md"
      />
      <Avatar
        src="https://api.dicebear.com/9.x/thumbs/svg?seed=Mongle"
        alt="Mongle"
        size="lg"
      />
    </Stack>
  ),
}

export const WithInitials: Story = {
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Avatar name="MG" color="primary" />
      <Avatar name="John Doe" color="secondary" />
      <Avatar name="Chris Kim" color="accent" />
      <Avatar name="A" color="neutral" />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Avatar name="SM" size="sm" />
      <Avatar name="MD" size="md" />
      <Avatar name="LG" size="lg" />
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Avatar name="A" color="primary" />
      <Avatar name="B" color="secondary" />
      <Avatar name="C" color="accent" />
      <Avatar name="D" color="neutral" />
    </Stack>
  ),
}

export const Fallback: Story = {
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
    </Stack>
  ),
}

export const UserList: Story = {
  render: () => (
    <Card className="max-w-sm" variant="elevated">
      <Card.Header>
        <Typography variant="subtitle2">Member</Typography>
      </Card.Header>
      <Card.Content>
        <Stack gap={3}>
          {[
            { name: 'Mongle Kim', role: 'Designer', avatarColor: 'primary' as const, badgeColor: 'primary' as const },
            { name: 'Jane Park', role: 'Developer', avatarColor: 'secondary' as const, badgeColor: 'secondary' as const },
            { name: 'Alex Lee', role: 'PM', avatarColor: 'accent' as const, badgeColor: 'success' as const },
          ].map((member) => (
            <Stack
              key={member.name}
              direction="horizontal"
              gap={3}
              align="center"
            >
              <Avatar name={member.name} color={member.avatarColor} size="sm" />
              <Stack gap={0}>
                <Typography variant="body2">{member.name}</Typography>
                <Typography variant="caption" color="secondary">
                  {member.role}
                </Typography>
              </Stack>
              <Badge size="sm" color={member.badgeColor} className="ml-auto">
                {member.role}
              </Badge>
            </Stack>
          ))}
        </Stack>
      </Card.Content>
    </Card>
  ),
}
