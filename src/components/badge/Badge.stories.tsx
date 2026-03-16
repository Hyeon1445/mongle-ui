import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Divider } from '@/components/divider'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

import { Badge } from './Badge'

const meta = {
  title: 'Feedback/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'soft'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'soft',
    color: 'primary',
    size: 'md',
  },
  render: (args) => <Badge {...args} />,
}

export const Variants: Story = {
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="soft">Soft</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack gap={4}>
      {(['solid', 'soft', 'outline', 'ghost'] as const).map((variant) => (
        <Stack key={variant} direction="horizontal" gap={3} align="center">
          <Badge variant={variant} color="primary">
            Primary
          </Badge>
          <Badge variant={variant} color="secondary">
            Secondary
          </Badge>
          <Badge variant={variant} color="success">
            Success
          </Badge>
          <Badge variant={variant} color="error">
            Error
          </Badge>
          <Badge variant={variant} color="warning">
            Warning
          </Badge>
          <Badge variant={variant} color="info">
            Info
          </Badge>
        </Stack>
      ))}
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </Stack>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <Card className="max-w-xs" variant="elevated">
      <Card.Header>
        <Stack direction="horizontal" gap={2}>
          <Badge size="sm" variant="solid" color="error">
            HOT
          </Badge>
          <Badge size="sm" color="warning">
            Limited
          </Badge>
        </Stack>
      </Card.Header>
      <Card.Content>
        <Stack gap={3}>
          <Stack gap={1}>
            <Typography variant="subtitle2">Cloud cushion</Typography>
            <Typography variant="body2" color="secondary">
              Soft and cozy, like sitting on a cloud
            </Typography>
          </Stack>
          <Stack direction="horizontal" justify="between" align="center">
            <Typography variant="body1" className="font-bold">
              $35.00
            </Typography>
            <Badge size="sm" color="success">
              Free shipping
            </Badge>
          </Stack>
        </Stack>
      </Card.Content>
      <Card.Footer>
        <Button fullWidth>Add to cart</Button>
      </Card.Footer>
    </Card>
  ),
}

export const ProfileExample: Story = {
  render: () => (
    <Card className="max-w-xs" variant="elevated">
      <Card.Content>
        <Stack gap={4} align="center">
          <Avatar name="MG" size="lg" />
          <Stack gap={1} align="center">
            <Stack direction="horizontal" gap={2} align="center">
              <Typography variant="subtitle2">MG</Typography>
              <Badge size="sm" variant="solid" color="secondary">
                Pro
              </Badge>
            </Stack>
            <Typography variant="body2" color="secondary">
              mongle@example.com
            </Typography>
          </Stack>
          <Divider className="w-full" />
          <Stack direction="horizontal" gap={2}>
            <Badge color="primary">Design</Badge>
            <Badge color="secondary">Frontend</Badge>
            <Badge color="success">UX</Badge>
          </Stack>
        </Stack>
      </Card.Content>
      <Card.Footer>
        <Button fullWidth variant="soft">
          Edit profile
        </Button>
      </Card.Footer>
    </Card>
  ),
}
