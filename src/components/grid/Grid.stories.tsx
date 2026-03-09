import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stack } from '@/components/stack'

import { Grid } from './Grid'

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 12],
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
  },
} satisfies Meta<typeof Grid>

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
    <Grid columns={3}>
      {Array.from({ length: 6 }, (_, i) => (
        <Box key={i}>Item {i + 1}</Box>
      ))}
    </Grid>
  ),
}

export const Columns: Story = {
  name: '컬럼 수',
  render: () => (
    <Stack gap={8}>
      {([1, 2, 3, 4, 6] as const).map((cols) => (
        <div key={cols}>
          <span className="mb-2 block text-xs text-gray-400">
            columns={cols}
          </span>
          <Grid columns={cols} gap={3}>
            {Array.from({ length: cols * 2 }, (_, i) => (
              <Box key={i}>{i + 1}</Box>
            ))}
          </Grid>
        </div>
      ))}
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
          <Grid columns={3} gap={value}>
            {Array.from({ length: 6 }, (_, i) => (
              <Box key={i}>{i + 1}</Box>
            ))}
          </Grid>
        </div>
      ))}
    </Stack>
  ),
}

export const Align: Story = {
  name: '아이템 정렬 (세로)',
  render: () => (
    <Stack gap={6}>
      {(['start', 'center', 'end', 'stretch'] as const).map((align) => (
        <div key={align}>
          <span className="mb-2 block text-xs text-gray-400">{align}</span>
          <Grid
            columns={3}
            gap={3}
            align={align}
            className="rounded-lg border border-dashed border-gray-200 p-3"
          >
            <Box className="py-2">작은</Box>
            <Box className="py-6">큰</Box>
            <Box className="py-4">중간</Box>
          </Grid>
        </div>
      ))}
    </Stack>
  ),
}

export const Justify: Story = {
  name: '아이템 정렬 (가로)',
  render: () => (
    <Stack gap={6}>
      {(['start', 'center', 'end', 'stretch'] as const).map((justify) => (
        <div key={justify}>
          <span className="mb-2 block text-xs text-gray-400">{justify}</span>
          <Grid
            columns={3}
            gap={3}
            justify={justify}
            className="rounded-lg border border-dashed border-gray-200 p-3"
          >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Grid>
        </div>
      ))}
    </Stack>
  ),
}

export const CompositionExample: Story = {
  name: '조합 예시 — 카드 갤러리',
  render: () => (
    <Grid columns={3} gap={6}>
      {Array.from({ length: 6 }, (_, i) => (
        <Stack
          key={i}
          gap={3}
          className="rounded-2xl border border-gray-200 p-5"
        >
          <div className="flex h-24 items-center justify-center rounded-lg bg-primary-50 text-2xl font-bold text-primary-400">
            {i + 1}
          </div>
          <Stack gap={1}>
            <span className="font-medium text-gray-900">카드 제목 {i + 1}</span>
            <span className="text-sm text-gray-500">
              카드에 대한 간단한 설명이 들어갑니다.
            </span>
          </Stack>
        </Stack>
      ))}
    </Grid>
  ),
}
