import type { Meta, StoryObj } from '@storybook/react-vite'

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
  name: '색상 강도',
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
  name: '세로 방향',
  render: () => (
    <Stack direction="horizontal" align="center" gap={4} className="h-6">
      <Typography variant="body2">항목 1</Typography>
      <Divider orientation="vertical" />
      <Typography variant="body2">항목 2</Typography>
      <Divider orientation="vertical" />
      <Typography variant="body2">항목 3</Typography>
    </Stack>
  ),
}

export const WithLabel: Story = {
  name: '라벨',
  render: () => (
    <Stack gap={8}>
      <Divider label="OR" />
      <Divider label="또는" />
      <Divider label="Section" color="strong" />
    </Stack>
  ),
}

export const CompositionExample: Story = {
  name: '조합 예시 — 프로필 카드',
  render: () => (
    <Card className="max-w-sm">
      <Stack gap={0}>
          <Stack direction="horizontal" align="center" gap={4}>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-100">
              <Typography variant="heading4" color="primary">
                홍
              </Typography>
            </div>
            <Stack gap={0}>
              <Stack direction="horizontal" align="center" gap={2}>
                <Typography variant="subtitle2">홍길동</Typography>
                <Badge size="sm" color="primary">
                  Admin
                </Badge>
              </Stack>
              <Typography variant="body2" color="secondary">
                Frontend Developer
              </Typography>
            </Stack>
          </Stack>

          <Divider className="my-5" />

          <Stack gap={3}>
            <Stack direction="horizontal" justify="between">
              <Typography variant="body2" color="secondary">
                이메일
              </Typography>
              <Typography variant="body2">hong@example.com</Typography>
            </Stack>
            <Stack direction="horizontal" justify="between">
              <Typography variant="body2" color="secondary">
                팀
              </Typography>
              <Typography variant="body2">디자인 시스템</Typography>
            </Stack>
            <Stack direction="horizontal" justify="between">
              <Typography variant="body2" color="secondary">
                입사일
              </Typography>
              <Typography variant="body2">2024. 03. 15</Typography>
            </Stack>
          </Stack>

          <Divider className="my-5" color="light" />

          <Stack direction="horizontal" gap={4} justify="center">
            <Stack align="center" gap={0}>
              <Typography variant="subtitle2">42</Typography>
              <Typography variant="caption" color="disabled">
                게시물
              </Typography>
            </Stack>
            <Divider orientation="vertical" className="h-8" />
            <Stack align="center" gap={0}>
              <Typography variant="subtitle2">128</Typography>
              <Typography variant="caption" color="disabled">
                팔로워
              </Typography>
            </Stack>
            <Divider orientation="vertical" className="h-8" />
            <Stack align="center" gap={0}>
              <Typography variant="subtitle2">56</Typography>
              <Typography variant="caption" color="disabled">
                팔로잉
              </Typography>
            </Stack>
          </Stack>

          <Divider className="my-5" color="light" />

          <Stack direction="horizontal" gap={3}>
            <Button variant="soft" fullWidth>
              메시지
            </Button>
            <Button fullWidth>팔로우</Button>
          </Stack>
        </Stack>
    </Card>
  ),
}
