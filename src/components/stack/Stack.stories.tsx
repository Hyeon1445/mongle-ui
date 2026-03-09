import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stack } from './Stack'

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
  },
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

const Box = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={`flex items-center justify-center rounded-lg bg-primary-100 px-4 py-3 text-sm font-medium text-primary-700 ${className}`}
  >
    {children}
  </div>
)

export const Default: Story = {
  render: () => (
    <Stack>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
}

export const Direction: Story = {
  name: '방향',
  render: () => (
    <Stack gap={8}>
      <div>
        <span className="mb-2 block text-xs text-gray-400">vertical</span>
        <Stack direction="vertical" gap={3}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Stack>
      </div>
      <div>
        <span className="mb-2 block text-xs text-gray-400">horizontal</span>
        <Stack direction="horizontal" gap={3}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Stack>
      </div>
    </Stack>
  ),
}

export const Spacing: Story = {
  name: '간격',
  render: () => (
    <Stack gap={8}>
      {([0, 2, 4, 8] as const).map((value) => (
        <div key={value}>
          <span className="mb-2 block text-xs text-gray-400">
            gap={value}
          </span>
          <Stack direction="horizontal" gap={value}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
        </div>
      ))}
    </Stack>
  ),
}

export const Align: Story = {
  name: '교차축 정렬',
  render: () => (
    <Stack gap={6}>
      {(['start', 'center', 'end', 'stretch', 'baseline'] as const).map(
        (align) => (
          <div key={align}>
            <span className="mb-2 block text-xs text-gray-400">{align}</span>
            <Stack
              direction="horizontal"
              gap={3}
              align={align}
              className="rounded-lg border border-dashed border-gray-200 p-3"
            >
              <Box className="py-2">작은</Box>
              <Box className="py-6">큰</Box>
              <Box className="py-4">중간</Box>
            </Stack>
          </div>
        )
      )}
    </Stack>
  ),
}

export const Justify: Story = {
  name: '주축 정렬',
  render: () => (
    <Stack gap={6}>
      {(['start', 'center', 'end', 'between', 'around', 'evenly'] as const).map(
        (justify) => (
          <div key={justify}>
            <span className="mb-2 block text-xs text-gray-400">{justify}</span>
            <Stack
              direction="horizontal"
              gap={3}
              justify={justify}
              className="rounded-lg border border-dashed border-gray-200 p-3"
            >
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </Stack>
          </div>
        )
      )}
    </Stack>
  ),
}

export const Wrap: Story = {
  name: '줄바꿈',
  render: () => (
    <Stack
      direction="horizontal"
      gap={3}
      wrap
      className="max-w-xs rounded-lg border border-dashed border-gray-200 p-3"
    >
      {Array.from({ length: 8 }, (_, i) => (
        <Box key={i}>Item {i + 1}</Box>
      ))}
    </Stack>
  ),
}

export const CompositionExample: Story = {
  name: '조합 예시',
  render: () => (
    <Stack
      gap={6}
      className="max-w-sm rounded-2xl border border-gray-200 p-6"
    >
      <Stack gap={2}>
        <span className="text-lg font-semibold text-gray-900">프로필</span>
        <span className="text-sm text-gray-500">사용자 정보를 확인하세요</span>
      </Stack>
      <Stack direction="horizontal" gap={4} align="center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600">
          M
        </div>
        <Stack gap={1}>
          <span className="font-medium text-gray-900">몽글</span>
          <span className="text-sm text-gray-500">mongle@example.com</span>
        </Stack>
      </Stack>
      <Stack direction="horizontal" gap={3} justify="end">
        <button className="rounded-md px-4 py-2 text-sm text-gray-500 hover:bg-gray-100">
          취소
        </button>
        <button className="rounded-md bg-primary-500 px-4 py-2 text-sm text-white hover:bg-primary-600">
          수정
        </button>
      </Stack>
    </Stack>
  ),
}
