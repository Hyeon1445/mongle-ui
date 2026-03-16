import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

import { Spinner } from './Spinner'

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Loading',
  },
  render: (args) => <Spinner {...args} />,
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" gap={4} align="center">
      <Stack align="center" gap={2}>
        <Spinner size="sm" />
        <Typography variant="caption" color="secondary">
          sm
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Spinner size="md" />
        <Typography variant="caption" color="secondary">
          md
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Spinner size="lg" />
        <Typography variant="caption" color="secondary">
          lg
        </Typography>
      </Stack>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="horizontal" gap={4} align="center">
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="error" />
      <Spinner color="warning" />
      <Spinner color="info" />
    </Stack>
  ),
}

export const LoadingCard: Story = {
  render: () => (
    <Card className="max-w-xs" variant="elevated">
      <Card.Content>
        <Stack gap={4} align="center" className="py-6">
          <Spinner size="lg" color="primary" />
          <Stack gap={1} align="center">
            <Typography variant="subtitle2">Loading...</Typography>
            <Typography variant="body2" color="secondary">
              Please wait a moment
            </Typography>
          </Stack>
        </Stack>
      </Card.Content>
    </Card>
  ),
}

export const InlineLoading: Story = {
  render: () => (
    <Stack gap={6}>
      <Stack direction="horizontal" gap={3} align="center">
        <Spinner size="sm" />
        <Typography variant="body2" color="secondary">
          Loading messages...
        </Typography>
      </Stack>
      <Card className="max-w-sm" variant="outlined">
        <Card.Content>
          <Stack gap={3}>
            <Typography variant="subtitle2">Recent notifications</Typography>
            <Stack direction="horizontal" gap={2} align="center" justify="center" className="py-4">
              <Spinner size="sm" color="secondary" />
              <Typography variant="body2" color="secondary">
                Checking notifications...
              </Typography>
            </Stack>
          </Stack>
        </Card.Content>
      </Card>
      <Stack direction="horizontal">
        <Button isLoading>Saving</Button>
      </Stack>
    </Stack>
  ),
}
