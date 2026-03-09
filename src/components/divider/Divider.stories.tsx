import type { Meta, StoryObj } from '@storybook/react-vite'

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
    <Stack
      gap={0}
      className="max-w-sm rounded-2xl border border-gray-200 p-6"
    >
      <Stack gap={1}>
        <Typography variant="subtitle2">홍길동</Typography>
        <Typography variant="body2" color="secondary">
          Frontend Developer
        </Typography>
      </Stack>

      <Divider className="my-4" />

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
      </Stack>

      <Divider className="my-4" color="light" />

      <Stack direction="horizontal" gap={4} justify="center">
        <Typography variant="caption" color="disabled">
          게시물 42
        </Typography>
        <Divider orientation="vertical" className="h-3" />
        <Typography variant="caption" color="disabled">
          팔로워 128
        </Typography>
        <Divider orientation="vertical" className="h-3" />
        <Typography variant="caption" color="disabled">
          팔로잉 56
        </Typography>
      </Stack>
    </Stack>
  ),
}
