import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Bell,
  Bookmark,
  Calendar,
  Check,
  ChevronDown,
  Cloud,
  Edit3,
  Heart,
  Home,
  Mail,
  MapPin,
  Moon,
  Search,
  Settings,
  Star,
  Sun,
  Trash2,
  User,
  X,
} from 'lucide-react'

import { Avatar } from '@/components/data-display/avatar'
import { Card } from '@/components/layout/card'
import { Divider } from '@/components/layout/divider'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { Icon } from './Icon'

const meta = {
  title: 'General/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      table: { disable: true },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: [
        undefined,
        'primary',
        'secondary',
        'success',
        'error',
        'warning',
        'info',
      ],
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: Heart,
    size: 'md',
    label: 'Like',
  },
  render: (args) => <Icon {...args} />,
}

export const Sizes: Story = {
  args: { icon: Heart },
  render: () => (
    <Stack direction="horizontal" gap={8} align="end">
      <Stack align="center" gap={2}>
        <Icon icon={Heart} size="sm" color="primary" />
        <Typography variant="caption" color="secondary">
          sm
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Icon icon={Heart} size="md" color="primary" />
        <Typography variant="caption" color="secondary">
          md
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Icon icon={Heart} size="lg" color="primary" />
        <Typography variant="caption" color="secondary">
          lg
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Icon icon={Heart} size={32} color="primary" />
        <Typography variant="caption" color="secondary">
          32px
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Icon icon={Heart} size={48} color="primary" />
        <Typography variant="caption" color="secondary">
          48px
        </Typography>
      </Stack>
    </Stack>
  ),
}

export const Colors: Story = {
  args: { icon: Heart },
  render: () => (
    <Stack direction="horizontal" gap={4} align="center">
      <Stack align="center" gap={2}>
        <Icon icon={Heart} color="primary" />
        <Typography variant="caption" color="secondary">
          primary
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Icon icon={Heart} color="secondary" />
        <Typography variant="caption" color="secondary">
          secondary
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Icon icon={Heart} color="success" />
        <Typography variant="caption" color="secondary">
          success
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Icon icon={Heart} color="error" />
        <Typography variant="caption" color="secondary">
          error
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Icon icon={Heart} color="warning" />
        <Typography variant="caption" color="secondary">
          warning
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Icon icon={Heart} color="info" />
        <Typography variant="caption" color="secondary">
          info
        </Typography>
      </Stack>
      <Stack align="center" gap={2}>
        <Icon icon={Heart} color="muted" />
        <Typography variant="caption" color="secondary">
          muted
        </Typography>
      </Stack>
    </Stack>
  ),
}

export const IconGallery: Story = {
  args: { icon: Heart },
  render: () => {
    const icons = [
      { icon: Heart, name: 'Heart' },
      { icon: Star, name: 'Star' },
      { icon: Home, name: 'Home' },
      { icon: User, name: 'User' },
      { icon: Settings, name: 'Settings' },
      { icon: Search, name: 'Search' },
      { icon: Bell, name: 'Bell' },
      { icon: Mail, name: 'Mail' },
      { icon: Calendar, name: 'Calendar' },
      { icon: Bookmark, name: 'Bookmark' },
      { icon: Cloud, name: 'Cloud' },
      { icon: Sun, name: 'Sun' },
      { icon: Moon, name: 'Moon' },
      { icon: MapPin, name: 'MapPin' },
      { icon: Edit3, name: 'Edit3' },
      { icon: Trash2, name: 'Trash2' },
      { icon: Check, name: 'Check' },
      { icon: X, name: 'X' },
      { icon: ChevronDown, name: 'ChevronDown' },
    ]

    return (
      <Grid columns={4} gap={4}>
        {icons.map(({ icon, name }) => (
          <Stack key={name} align="center" gap={2} className="py-3">
            <Icon icon={icon} size="lg" color="primary" />
            <Typography variant="caption" color="secondary">
              {name}
            </Typography>
          </Stack>
        ))}
      </Grid>
    )
  },
}

export const ProfileCard: Story = {
  args: { icon: Heart },
  render: () => (
    <Card className="max-w-xs" variant="elevated">
      <Card.Content>
        <Stack gap={4}>
          <Stack direction="horizontal" gap={3} align="center">
            <Avatar name="Mongle Kim" size="lg" color="primary" />
            <Stack gap={1}>
              <Typography variant="subtitle2">Mongle Kim</Typography>
              <Typography variant="caption" color="secondary">
                Frontend Developer
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={2}>
            <Stack direction="horizontal" gap={2} align="center">
              <Icon icon={Mail} size="sm" color="secondary" />
              <Typography variant="body2">hello@mongle.dev</Typography>
            </Stack>
            <Stack direction="horizontal" gap={2} align="center">
              <Icon icon={MapPin} size="sm" color="secondary" />
              <Typography variant="body2">Seoul, South Korea</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card.Content>
    </Card>
  ),
}

export const WeatherCard: Story = {
  args: { icon: Heart },
  render: () => (
    <Card className="max-w-70" variant="elevated">
      <Card.Content>
        <Stack gap={5}>
          <Stack align="center" gap={1}>
            <Stack direction="horizontal" gap={1} align="center">
              <Icon icon={MapPin} size="sm" color="error" />
              <Typography variant="caption" color="secondary">
                Seoul, South Korea
              </Typography>
            </Stack>
            <Stack direction="horizontal" gap={3} align="center">
              <Icon icon={Sun} size={40} color="warning" />
              <Typography variant="heading2" className="translate-y-0.5">
                24°
              </Typography>
            </Stack>
            <Typography variant="body2" color="secondary">
              Clear
            </Typography>
          </Stack>
          <Divider />
          <Grid columns={3} gap={2}>
            <Stack align="center" gap={1}>
              <Icon icon={Cloud} size="sm" color="info" />
              <Typography variant="caption" color="secondary">
                Humidity
              </Typography>
              <Typography variant="subtitle2">45%</Typography>
            </Stack>
            <Stack align="center" gap={1}>
              <Icon icon={Moon} size="sm" color="secondary" />
              <Typography variant="caption" color="secondary">
                Sunset
              </Typography>
              <Typography variant="subtitle2">18:32</Typography>
            </Stack>
            <Stack align="center" gap={1}>
              <Icon icon={Calendar} size="sm" color="primary" />
              <Typography variant="caption" color="secondary">
                Forecast
              </Typography>
              <Typography variant="subtitle2">Rain</Typography>
            </Stack>
          </Grid>
        </Stack>
      </Card.Content>
    </Card>
  ),
}
