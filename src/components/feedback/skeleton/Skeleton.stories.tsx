import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/components/layout/card'
import { Stack } from '@/components/layout/stack'
import { Grid } from '@/components/layout/grid'
import { Typography } from '@/components/general/typography'
import { Avatar } from '@/components/data-display/avatar'
import { Divider } from '@/components/layout/divider'

import { Skeleton } from './Skeleton'

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
    },
    animate: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'rectangular',
    animate: true,
    className: 'h-16 w-64',
  },
  render: (args) => <Skeleton {...args} />,
}

export const Variants: Story = {
  render: () => (
    <Stack gap={6}>
      <Stack gap={2}>
        <Typography variant="caption" color="secondary">
          text
        </Typography>
        <Skeleton variant="text" className="w-48" />
      </Stack>
      <Stack gap={2}>
        <Typography variant="caption" color="secondary">
          circular
        </Typography>
        <Skeleton variant="circular" className="h-12 w-12" />
      </Stack>
      <Stack gap={2}>
        <Typography variant="caption" color="secondary">
          rectangular
        </Typography>
        <Skeleton variant="rectangular" className="h-16 w-48" />
      </Stack>
      <Stack gap={2}>
        <Typography variant="caption" color="secondary">
          rounded
        </Typography>
        <Skeleton variant="rounded" className="h-16 w-48" />
      </Stack>
    </Stack>
  ),
}

export const TextLines: Story = {
  render: () => (
    <Stack gap={2} className="w-64">
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-5/6" />
      <Skeleton variant="text" className="w-4/6" />
    </Stack>
  ),
}

export const Static: Story = {
  render: () => (
    <Stack gap={4} className="w-64">
      <Typography variant="body2" color="secondary">
        animate=false (no pulse)
      </Typography>
      <Skeleton variant="rounded" animate={false} className="h-16 w-full" />
    </Stack>
  ),
}

export const ProfileCardSkeleton: Story = {
  render: () => (
    <Card variant="elevated" className="w-72">
      <Card.Content>
        <Stack gap={4}>
          <Stack direction="horizontal" gap={3} align="center">
            <Skeleton variant="circular" className="h-12 w-12 shrink-0" />
            <Stack gap={2} className="flex-1">
              <Skeleton variant="text" className="w-3/4" />
              <Skeleton variant="text" className="w-1/2" />
            </Stack>
          </Stack>
          <Divider />
          <Stack gap={2}>
            <Skeleton variant="text" className="w-full" />
            <Skeleton variant="text" className="w-5/6" />
            <Skeleton variant="text" className="w-4/6" />
          </Stack>
          <Skeleton variant="rounded" className="h-8 w-24" />
        </Stack>
      </Card.Content>
    </Card>
  ),
}


export const ContentLoaded: Story = {
  render: () => (
    <Grid columns={2} gap={4} className="w-160">
      <Stack gap={2}>
        <Typography variant="caption" color="secondary">
          Loading
        </Typography>
        <Card variant="outlined">
          <Card.Content>
            <Stack gap={3}>
              <Stack direction="horizontal" gap={3} align="center">
                <Skeleton variant="circular" className="h-10 w-10 shrink-0" />
                <Stack gap={2} className="flex-1">
                  <Skeleton variant="text" className="w-2/3" />
                  <Skeleton variant="text" className="w-1/3" />
                </Stack>
              </Stack>
              <Skeleton variant="rounded" className="h-32 w-full" />
              <Stack gap={2}>
                <Skeleton variant="text" className="w-full" />
                <Skeleton variant="text" className="w-4/5" />
              </Stack>
            </Stack>
          </Card.Content>
        </Card>
      </Stack>
      <Stack gap={2}>
        <Typography variant="caption" color="secondary">
          Loaded
        </Typography>
        <Card variant="outlined">
          <Card.Content>
            <Stack gap={3}>
              <Stack direction="horizontal" gap={3} align="center">
                <Avatar name="Mia" size="md" />
                <Stack gap={1}>
                  <Typography variant="subtitle2">Mia Choi</Typography>
                  <Typography variant="caption" color="secondary">
                    2 hours ago
                  </Typography>
                </Stack>
              </Stack>
              <Skeleton variant="rounded" animate={false} className="h-32 w-full bg-primary-50" />
              <Stack gap={1}>
                <Typography variant="body2">
                  Just discovered mongle-ui and it's so warm and cozy!
                </Typography>
                <Typography variant="body2" color="secondary">
                  The shimmer skeleton is my favorite detail.
                </Typography>
              </Stack>
            </Stack>
          </Card.Content>
        </Card>
      </Stack>
    </Grid>
  ),
}
