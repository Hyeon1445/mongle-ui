import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

import { Box } from './Box'

const meta = {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
    },
    paddingX: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
    },
    paddingY: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
  },
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    padding: 4,
    radius: 'lg',
    className: 'bg-gray-100',
  },
  render: (args) => (
    <Box {...args}>
      <Typography variant="body1">Box 컴포넌트</Typography>
    </Box>
  ),
}

export const Padding: Story = {
  name: '패딩',
  render: () => (
    <Stack gap={4}>
      {([0, 2, 4, 6, 8, 12] as const).map((p) => (
        <Box key={p} padding={p} className="bg-primary-50">
          <Typography variant="body2">padding={p}</Typography>
        </Box>
      ))}
    </Stack>
  ),
}

export const DirectionalPadding: Story = {
  name: '방향별 패딩',
  render: () => (
    <Stack gap={4}>
      <Box paddingX={8} paddingY={2} className="bg-secondary-50">
        <Typography variant="body2">paddingX=8, paddingY=2</Typography>
      </Box>
      <Box paddingX={2} paddingY={8} className="bg-secondary-50">
        <Typography variant="body2">paddingX=2, paddingY=8</Typography>
      </Box>
    </Stack>
  ),
}

export const Radius: Story = {
  name: '테두리 곡률',
  render: () => (
    <Stack direction="horizontal" gap={4} className="flex-wrap">
      {(['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map((r) => (
        <Box key={r} padding={4} radius={r} className="bg-primary-100">
          <Typography variant="caption">{r}</Typography>
        </Box>
      ))}
    </Stack>
  ),
}
