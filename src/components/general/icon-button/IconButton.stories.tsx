import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Edit,
  Heart,
  Italic,
  List,
  ListOrdered,
  MoreVertical,
  Share2,
  Trash2,
  Underline,
} from 'lucide-react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/components/layout/card'
import { Divider } from '@/components/layout/divider'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { IconButton } from './IconButton'

const meta = {
  title: 'General/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: Heart,
    'aria-label': 'Like',
    variant: 'ghost',
    size: 'md',
    color: 'primary',
    disabled: false,
    isLoading: false,
  },
}

export const Variants: Story = {
  args: {
    icon: Heart,
    'aria-label': 'Like',
  },
  render: () => (
    <Stack direction="horizontal" gap={3}>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="solid" />
        <Typography variant="caption" color="secondary">solid</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="outline" />
        <Typography variant="caption" color="secondary">outline</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="ghost" />
        <Typography variant="caption" color="secondary">ghost</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="soft" />
        <Typography variant="caption" color="secondary">soft</Typography>
      </Stack>
    </Stack>
  ),
}

export const Sizes: Story = {
  args: {
    icon: Heart,
    'aria-label': 'Like',
  },
  render: () => (
    <Stack direction="horizontal" gap={3} align="end">
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="outline" size="sm" />
        <Typography variant="caption" color="secondary">sm</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="outline" size="md" />
        <Typography variant="caption" color="secondary">md</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="outline" size="lg" />
        <Typography variant="caption" color="secondary">lg</Typography>
      </Stack>
    </Stack>
  ),
}

export const Colors: Story = {
  args: {
    icon: Heart,
    'aria-label': 'Like',
  },
  render: () => (
    <Stack direction="horizontal" gap={3}>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="soft" color="primary" />
        <Typography variant="caption" color="secondary">primary</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="soft" color="secondary" />
        <Typography variant="caption" color="secondary">secondary</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="soft" color="success" />
        <Typography variant="caption" color="secondary">success</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="soft" color="error" />
        <Typography variant="caption" color="secondary">error</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="soft" color="warning" />
        <Typography variant="caption" color="secondary">warning</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="soft" color="info" />
        <Typography variant="caption" color="secondary">info</Typography>
      </Stack>
    </Stack>
  ),
}

export const Disabled: Story = {
  args: {
    icon: Heart,
    'aria-label': 'Like',
  },
  render: () => (
    <Stack direction="horizontal" gap={3}>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="solid" disabled />
        <Typography variant="caption" color="secondary">solid</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="outline" disabled />
        <Typography variant="caption" color="secondary">outline</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="ghost" disabled />
        <Typography variant="caption" color="secondary">ghost</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="soft" disabled />
        <Typography variant="caption" color="secondary">soft</Typography>
      </Stack>
    </Stack>
  ),
}

export const Loading: Story = {
  args: {
    icon: Heart,
    'aria-label': 'Like',
  },
  render: () => (
    <Stack direction="horizontal" gap={3}>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="solid" isLoading />
        <Typography variant="caption" color="secondary">solid</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="outline" isLoading />
        <Typography variant="caption" color="secondary">outline</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="ghost" isLoading />
        <Typography variant="caption" color="secondary">ghost</Typography>
      </Stack>
      <Stack gap={1} align="center">
        <IconButton icon={Heart} aria-label="Like" variant="soft" isLoading />
        <Typography variant="caption" color="secondary">soft</Typography>
      </Stack>
    </Stack>
  ),
}

export const CardActions: Story = {
  name: 'Card actions',
  args: {
    icon: Heart,
    'aria-label': 'Like',
  },
  render: () => (
    <Card variant="outlined" className="max-w-xs">
      <Card.Header>
        <Stack direction="horizontal" justify="between" align="center">
          <Typography variant="subtitle2">Card title</Typography>
          <Stack direction="horizontal" gap={1}>
            <IconButton icon={Edit} aria-label="Edit" size="sm" />
            <IconButton icon={MoreVertical} aria-label="More" size="sm" />
          </Stack>
        </Stack>
      </Card.Header>
      <Card.Content>
        <Typography variant="body2" color="secondary">
          Icon buttons in a card header for common actions.
        </Typography>
      </Card.Content>
      <Divider />
      <Card.Footer>
        <Stack direction="horizontal" gap={1}>
          <IconButton icon={Heart} aria-label="Like" size="sm" color="error" />
          <IconButton icon={Share2} aria-label="Share" size="sm" />
          <IconButton icon={Trash2} aria-label="Delete" size="sm" color="error" />
        </Stack>
      </Card.Footer>
    </Card>
  ),
}

export const Toolbar: Story = {
  args: {
    icon: Heart,
    'aria-label': 'Like',
  },
  render: () => (
    <Stack
      direction="horizontal"
      gap={1}
      align="center"
      className="w-fit rounded-xl border border-secondary-200 px-2 py-1"
    >
      <IconButton icon={Bold} aria-label="Bold" size="sm" variant="ghost" />
      <IconButton icon={Italic} aria-label="Italic" size="sm" variant="ghost" />
      <IconButton icon={Underline} aria-label="Underline" size="sm" variant="ghost" />
      <Divider orientation="vertical" className="h-6" />
      <IconButton icon={AlignLeft} aria-label="Align left" size="sm" variant="ghost" />
      <IconButton icon={AlignCenter} aria-label="Align center" size="sm" variant="ghost" />
      <IconButton icon={AlignRight} aria-label="Align right" size="sm" variant="ghost" />
      <Divider orientation="vertical" className="h-6" />
      <IconButton icon={List} aria-label="Bullet list" size="sm" variant="ghost" />
      <IconButton icon={ListOrdered} aria-label="Numbered list" size="sm" variant="ghost" />
    </Stack>
  ),
}
