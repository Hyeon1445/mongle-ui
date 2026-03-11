import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Typography } from '@/components/typography'

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
  args: {
    direction: 'vertical',
    gap: 4,
  },
  render: (args) => (
    <Stack {...args}>
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
        <Typography variant="caption" color="disabled" className="mb-2">vertical</Typography>
        <Stack direction="vertical" gap={3}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Stack>
      </div>
      <div>
        <Typography variant="caption" color="disabled" className="mb-2">horizontal</Typography>
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
          <Typography variant="caption" color="disabled" className="mb-2">
            gap={value}
          </Typography>
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
            <Typography variant="caption" color="disabled" className="mb-2">{align}</Typography>
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
            <Typography variant="caption" color="disabled" className="mb-2">{justify}</Typography>
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
    <Card className="max-w-sm">
      <Stack gap={6}>
        <Stack gap={2}>
          <Typography variant="subtitle2">프로필</Typography>
          <Typography variant="body2" color="secondary">사용자 정보를 확인하세요</Typography>
        </Stack>
        <Stack direction="horizontal" gap={4} align="center">
          <Avatar name="몽글" />
          <Stack gap={1}>
            <Typography variant="body1" className="font-medium">몽글</Typography>
            <Typography variant="body2" color="secondary">mongle@example.com</Typography>
          </Stack>
        </Stack>
        <Stack direction="horizontal" gap={3} justify="end">
          <Button variant="ghost">취소</Button>
          <Button>수정</Button>
        </Stack>
      </Stack>
    </Card>
  ),
}
