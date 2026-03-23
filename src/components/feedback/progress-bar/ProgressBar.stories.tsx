import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/components/layout/card'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { ProgressBar } from './ProgressBar'

const meta = {
  title: 'Feedback/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'neutral'],
    },
    indeterminate: {
      control: 'boolean',
    },
    'aria-label': {
      control: 'text',
    },
  },
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 60,
    size: 'md',
    color: 'primary',
    indeterminate: false,
    'aria-label': 'Loading',
  },
  render: (args) => <ProgressBar {...args} />,
}

export const Sizes: Story = {
  render: () => (
    <Stack gap={6}>
      <Stack gap={2}>
        <Typography variant="caption" color="secondary">
          sm
        </Typography>
        <ProgressBar size="sm" value={70} />
      </Stack>
      <Stack gap={2}>
        <Typography variant="caption" color="secondary">
          md
        </Typography>
        <ProgressBar size="md" value={70} />
      </Stack>
      <Stack gap={2}>
        <Typography variant="caption" color="secondary">
          lg
        </Typography>
        <ProgressBar size="lg" value={70} />
      </Stack>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack gap={4}>
      <ProgressBar color="primary" value={60} aria-label="Primary" />
      <ProgressBar color="secondary" value={60} aria-label="Secondary" />
      <ProgressBar color="success" value={60} aria-label="Success" />
      <ProgressBar color="error" value={60} aria-label="Error" />
      <ProgressBar color="warning" value={60} aria-label="Warning" />
      <ProgressBar color="info" value={60} aria-label="Info" />
      <ProgressBar color="neutral" value={60} aria-label="Neutral" />
    </Stack>
  ),
}

export const Values: Story = {
  render: () => (
    <Stack gap={4}>
      {[0, 25, 50, 75, 100].map((value) => (
        <Stack key={value} direction="horizontal" align="center" gap={3}>
          <Typography variant="caption" color="secondary" className="w-8 shrink-0 text-right">
            {value}%
          </Typography>
          <ProgressBar value={value} className="flex-1" />
        </Stack>
      ))}
    </Stack>
  ),
}

export const Indeterminate: Story = {
  render: () => (
    <Stack gap={4}>
      <ProgressBar indeterminate color="primary" aria-label="Loading primary" />
      <ProgressBar indeterminate color="secondary" aria-label="Loading secondary" />
      <ProgressBar indeterminate color="success" aria-label="Loading success" />
    </Stack>
  ),
}

export const UploadExample: Story = {
  render: () => (
    <Card className="max-w-sm" variant="elevated">
      <Card.Content>
        <Stack gap={4}>
          <Stack gap={1}>
            <Typography variant="subtitle2">Uploading files...</Typography>
            <Typography variant="body2" color="secondary">
              3 of 5 files uploaded
            </Typography>
          </Stack>
          <Stack gap={2}>
            <Stack direction="horizontal" justify="between">
              <Typography variant="caption" color="secondary">
                report.pdf
              </Typography>
              <Typography variant="caption" color="secondary">
                100%
              </Typography>
            </Stack>
            <ProgressBar value={100} color="success" size="sm" aria-label="report.pdf upload" />
          </Stack>
          <Stack gap={2}>
            <Stack direction="horizontal" justify="between">
              <Typography variant="caption" color="secondary">
                photo.png
              </Typography>
              <Typography variant="caption" color="secondary">
                62%
              </Typography>
            </Stack>
            <ProgressBar value={62} size="sm" aria-label="photo.png upload" />
          </Stack>
          <Stack gap={2}>
            <Stack direction="horizontal" justify="between">
              <Typography variant="caption" color="secondary">
                video.mp4
              </Typography>
              <Typography variant="caption" color="secondary">
                Waiting...
              </Typography>
            </Stack>
            <ProgressBar value={0} size="sm" color="secondary" aria-label="video.mp4 upload" />
          </Stack>
        </Stack>
      </Card.Content>
    </Card>
  ),
}
