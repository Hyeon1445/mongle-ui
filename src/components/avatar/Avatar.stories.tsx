import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/components/badge'
import { Card } from '@/components/card'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

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
    name: '몽글',
    size: 'md',
    color: 'primary',
  },
  render: (args) => <Avatar {...args} />,
}

export const WithImage: Story = {
  name: '이미지',
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Avatar
        src="https://api.dicebear.com/9.x/thumbs/svg?seed=Mongle"
        alt="몽글"
        size="sm"
      />
      <Avatar
        src="https://api.dicebear.com/9.x/thumbs/svg?seed=Mongle"
        alt="몽글"
        size="md"
      />
      <Avatar
        src="https://api.dicebear.com/9.x/thumbs/svg?seed=Mongle"
        alt="몽글"
        size="lg"
      />
    </Stack>
  ),
}

export const WithInitials: Story = {
  name: '이니셜',
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Avatar name="몽글" color="primary" />
      <Avatar name="John Doe" color="secondary" />
      <Avatar name="김철수" color="accent" />
      <Avatar name="A" color="neutral" />
    </Stack>
  ),
}

export const Sizes: Story = {
  name: '크기',
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Avatar name="SM" size="sm" />
      <Avatar name="MD" size="md" />
      <Avatar name="LG" size="lg" />
    </Stack>
  ),
}

export const Colors: Story = {
  name: '색상',
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Avatar name="가" color="primary" />
      <Avatar name="나" color="secondary" />
      <Avatar name="다" color="accent" />
      <Avatar name="라" color="neutral" />
    </Stack>
  ),
}

export const Fallback: Story = {
  name: '폴백 아이콘',
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
    </Stack>
  ),
}

export const CompositionExample: Story = {
  name: '조합 예시 — 사용자 목록',
  render: () => (
    <Card className="max-w-sm" variant="elevated">
      <Stack gap={3}>
        <Typography variant="subtitle2">팀원</Typography>
        {[
          { name: '김몽글', role: '디자이너', avatarColor: 'primary' as const, badgeColor: 'primary' as const },
          { name: '이포근', role: '개발자', avatarColor: 'secondary' as const, badgeColor: 'secondary' as const },
          { name: '박따뜻', role: 'PM', avatarColor: 'accent' as const, badgeColor: 'success' as const },
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
    </Card>
  ),
}
