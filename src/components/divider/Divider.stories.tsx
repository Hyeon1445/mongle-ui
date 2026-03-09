import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stack } from '@/components/stack'

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
          <span className="mb-2 block text-xs text-gray-400">{color}</span>
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
      <span className="text-sm text-gray-700">항목 1</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-gray-700">항목 2</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-gray-700">항목 3</span>
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
        <span className="text-lg font-semibold text-gray-900">홍길동</span>
        <span className="text-sm text-gray-500">Frontend Developer</span>
      </Stack>

      <Divider className="my-4" />

      <Stack gap={3}>
        <Stack direction="horizontal" justify="between">
          <span className="text-sm text-gray-500">이메일</span>
          <span className="text-sm text-gray-700">hong@example.com</span>
        </Stack>
        <Stack direction="horizontal" justify="between">
          <span className="text-sm text-gray-500">팀</span>
          <span className="text-sm text-gray-700">디자인 시스템</span>
        </Stack>
      </Stack>

      <Divider className="my-4" color="light" />

      <Stack direction="horizontal" gap={4} justify="center">
        <span className="text-xs text-gray-400">게시물 42</span>
        <Divider orientation="vertical" className="h-3" />
        <span className="text-xs text-gray-400">팔로워 128</span>
        <Divider orientation="vertical" className="h-3" />
        <span className="text-xs text-gray-400">팔로잉 56</span>
      </Stack>
    </Stack>
  ),
}
