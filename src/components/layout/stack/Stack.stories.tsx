import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/components/data-display/avatar'
import { Button } from '@/components/general/button'
import { Card } from '@/components/layout/card'
import { Typography } from '@/components/general/typography'

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

const DemoBlock = ({
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
      <DemoBlock>Item 1</DemoBlock>
      <DemoBlock>Item 2</DemoBlock>
      <DemoBlock>Item 3</DemoBlock>
    </Stack>
  ),
}

export const Direction: Story = {
  render: () => (
    <Stack gap={8}>
      <div>
        <Typography variant="caption" color="disabled" className="mb-2">vertical</Typography>
        <Stack direction="vertical" gap={3}>
          <DemoBlock>1</DemoBlock>
          <DemoBlock>2</DemoBlock>
          <DemoBlock>3</DemoBlock>
        </Stack>
      </div>
      <div>
        <Typography variant="caption" color="disabled" className="mb-2">horizontal</Typography>
        <Stack direction="horizontal" gap={3}>
          <DemoBlock>1</DemoBlock>
          <DemoBlock>2</DemoBlock>
          <DemoBlock>3</DemoBlock>
        </Stack>
      </div>
    </Stack>
  ),
}

export const Spacing: Story = {
  render: () => (
    <Stack gap={8}>
      {([0, 2, 4, 8] as const).map((value) => (
        <div key={value}>
          <Typography variant="caption" color="disabled" className="mb-2">
            gap={value}
          </Typography>
          <Stack direction="horizontal" gap={value}>
            <DemoBlock>1</DemoBlock>
            <DemoBlock>2</DemoBlock>
            <DemoBlock>3</DemoBlock>
          </Stack>
        </div>
      ))}
    </Stack>
  ),
}

export const Align: Story = {
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
              className="rounded-lg border border-dashed border-neutral-200 p-3"
            >
              <DemoBlock className="py-2">Small</DemoBlock>
              <DemoBlock className="py-6">Large</DemoBlock>
              <DemoBlock className="py-4">Medium</DemoBlock>
            </Stack>
          </div>
        )
      )}
    </Stack>
  ),
}

export const Justify: Story = {
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
              className="rounded-lg border border-dashed border-neutral-200 p-3"
            >
              <DemoBlock>1</DemoBlock>
              <DemoBlock>2</DemoBlock>
              <DemoBlock>3</DemoBlock>
            </Stack>
          </div>
        )
      )}
    </Stack>
  ),
}

export const Wrap: Story = {
  render: () => (
    <Stack
      direction="horizontal"
      gap={3}
      wrap
      className="max-w-xs rounded-lg border border-dashed border-neutral-200 p-3"
    >
      {Array.from({ length: 8 }, (_, i) => (
        <DemoBlock key={i}>Item {i + 1}</DemoBlock>
      ))}
    </Stack>
  ),
}

export const ProfileCard: Story = {
  render: () => (
    <Card className="max-w-sm">
      <Card.Header>
        <Stack gap={2}>
          <Typography variant="subtitle2">Profile</Typography>
          <Typography variant="body2" color="secondary">View user information</Typography>
        </Stack>
      </Card.Header>
      <Card.Content>
        <Stack direction="horizontal" gap={4} align="center">
          <Avatar name="MG" />
          <Stack gap={1}>
            <Typography variant="body1" className="font-medium">MG</Typography>
            <Typography variant="body2" color="secondary">mongle@example.com</Typography>
          </Stack>
        </Stack>
      </Card.Content>
      <Card.Footer>
        <Stack direction="horizontal" gap={3} justify="end">
          <Button variant="ghost">Cancel</Button>
          <Button>Edit</Button>
        </Stack>
      </Card.Footer>
    </Card>
  ),
}
