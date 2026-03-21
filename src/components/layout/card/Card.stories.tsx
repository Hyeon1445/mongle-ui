import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/components/data-display/avatar'
import { Button } from '@/components/general/button'
import { Divider } from '@/components/layout/divider'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { Card } from '.'

const meta = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'elevated', 'filled'],
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <Card.Header>
        <Typography variant="subtitle2">Announcement</Typography>
      </Card.Header>
      <Card.Content>
        <Stack gap={2}>
          <Typography variant="body2" color="secondary">
            Mongle UI v1.0 has been released.
          </Typography>
          <Typography variant="body2" color="secondary">
            Check out the new components and improved design tokens.
          </Typography>
        </Stack>
      </Card.Content>
      <Card.Footer>
        <Stack direction="horizontal" gap={2}>
          <Button size="sm">Learn more</Button>
          <Button size="sm" variant="ghost">
            Close
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  ),
}

export const Variants: Story = {
  render: () => (
    <Grid columns={3} gap={6}>
      {(['outlined', 'elevated', 'filled'] as const).map((variant) => (
        <Card key={variant} variant={variant}>
          <Card.Header>
            <Typography variant="subtitle2">{variant}</Typography>
          </Card.Header>
          <Card.Content>
            <Typography variant="body2" color="secondary">
              Card with {variant} style.
            </Typography>
          </Card.Content>
        </Card>
      ))}
    </Grid>
  ),
}

export const WithDivider: Story = {
  render: () => (
    <Card className="max-w-sm">
      <Card.Header>
        <Typography variant="subtitle2">Order summary</Typography>
      </Card.Header>
      <Card.Content>
        <Stack gap={3}>
          <Stack direction="horizontal" justify="between">
            <Typography variant="body2" color="secondary">
              Cloud cushion
            </Typography>
            <Typography variant="body2">$35.00</Typography>
          </Stack>
          <Stack direction="horizontal" justify="between">
            <Typography variant="body2" color="secondary">
              Cozy blanket
            </Typography>
            <Typography variant="body2">$48.00</Typography>
          </Stack>
          <Divider />
          <Stack direction="horizontal" justify="between">
            <Typography variant="body1" className="font-medium">
              Total
            </Typography>
            <Typography variant="body1" color="primary" className="font-bold">
              $83.00
            </Typography>
          </Stack>
        </Stack>
      </Card.Content>
      <Card.Footer>
        <Button fullWidth>Checkout</Button>
      </Card.Footer>
    </Card>
  ),
}

export const NotificationCard: Story = {
  render: () => (
    <Card className="max-w-sm">
      <Card.Header>
        <Stack direction="horizontal" justify="between" align="center">
          <Typography variant="subtitle2">Notifications</Typography>
          <Button size="sm" variant="ghost">
            Mark all read
          </Button>
        </Stack>
      </Card.Header>
      <Card.Content>
        <Stack gap={3}>
          {[
            'You have a new comment.',
            'Your order has been placed.',
            'Your delivery is on its way.',
          ].map((msg) => (
            <Typography key={msg} variant="body2" color="secondary">
              {msg}
            </Typography>
          ))}
        </Stack>
      </Card.Content>
    </Card>
  ),
}

export const ProfileCard: Story = {
  render: () => (
    <Card className="max-w-xs" variant="elevated">
      <Card.Content>
        <Stack gap={4} align="center">
          <Avatar name="MG" size="lg" />
          <Stack gap={1} align="center">
            <Typography variant="subtitle2">MG</Typography>
            <Typography variant="body2" color="secondary">
              mongle@example.com
            </Typography>
          </Stack>
          <Divider className="w-full" />
          <Stack direction="horizontal" gap={8}>
            <Stack align="center" gap={0}>
              <Typography variant="subtitle2">128</Typography>
              <Typography variant="caption" color="secondary">
                Posts
              </Typography>
            </Stack>
            <Stack align="center" gap={0}>
              <Typography variant="subtitle2">1.2K</Typography>
              <Typography variant="caption" color="secondary">
                Followers
              </Typography>
            </Stack>
            <Stack align="center" gap={0}>
              <Typography variant="subtitle2">356</Typography>
              <Typography variant="caption" color="secondary">
                Following
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card.Content>
      <Card.Footer>
        <Stack direction="horizontal" gap={3} className="w-full">
          <Button fullWidth variant="soft">
            Message
          </Button>
          <Button fullWidth>Follow</Button>
        </Stack>
      </Card.Footer>
    </Card>
  ),
}
