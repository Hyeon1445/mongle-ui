import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/components/avatar'
import { Card } from '@/components/card'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

import { AvatarGroup } from './AvatarGroup'

const meta = {
  title: 'General/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    max: { control: 'number' },
  },
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    max: 4,
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar name="김몽글" color="primary" />
      <Avatar name="이포근" color="secondary" />
      <Avatar name="박따뜻" color="accent" />
      <Avatar name="최아늑" color="neutral" />
      <Avatar name="정부드" color="primary" />
    </AvatarGroup>
  ),
}

export const Sizes: Story = {
  name: '크기',
  render: () => (
    <Stack gap={4}>
      <AvatarGroup size="sm">
        <Avatar name="김몽글" color="primary" />
        <Avatar name="이포근" color="secondary" />
        <Avatar name="박따뜻" color="accent" />
      </AvatarGroup>
      <AvatarGroup size="md">
        <Avatar name="김몽글" color="primary" />
        <Avatar name="이포근" color="secondary" />
        <Avatar name="박따뜻" color="accent" />
      </AvatarGroup>
      <AvatarGroup size="lg">
        <Avatar name="김몽글" color="primary" />
        <Avatar name="이포근" color="secondary" />
        <Avatar name="박따뜻" color="accent" />
      </AvatarGroup>
    </Stack>
  ),
}

export const WithMax: Story = {
  name: '최대 표시 개수',
  render: () => (
    <Stack gap={4}>
      <AvatarGroup max={3}>
        <Avatar name="김몽글" color="primary" />
        <Avatar name="이포근" color="secondary" />
        <Avatar name="박따뜻" color="accent" />
        <Avatar name="최아늑" color="neutral" />
        <Avatar name="정부드" color="primary" />
      </AvatarGroup>
      <AvatarGroup max={2}>
        <Avatar name="김몽글" color="primary" />
        <Avatar name="이포근" color="secondary" />
        <Avatar name="박따뜻" color="accent" />
        <Avatar name="최아늑" color="neutral" />
      </AvatarGroup>
    </Stack>
  ),
}

export const CompositionExample: Story = {
  name: '조합 예시 — 프로젝트 멤버',
  render: () => (
    <Card className="max-w-xs" variant="elevated">
      <Card.Header>
        <Stack gap={1}>
          <Typography variant="subtitle2">프로젝트 멤버</Typography>
          <Typography variant="caption" color="secondary">
            5명이 참여 중
          </Typography>
        </Stack>
      </Card.Header>
      <Card.Content>
        <AvatarGroup max={4}>
          <Avatar name="김몽글" color="primary" />
          <Avatar name="이포근" color="secondary" />
          <Avatar name="박따뜻" color="accent" />
          <Avatar name="최아늑" color="neutral" />
          <Avatar name="정부드" color="primary" />
        </AvatarGroup>
      </Card.Content>
    </Card>
  ),
}
