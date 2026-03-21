import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/components/data-display/avatar'
import { Card } from '@/components/layout/card'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { AvatarGroup } from './AvatarGroup'

const meta = {
  title: 'General/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    max: { control: 'number' },
  },
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    max: 4,
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar name="Mongle Kim" color="primary" />
      <Avatar name="Jane Park" color="secondary" />
      <Avatar name="Alex Lee" color="accent" />
      <Avatar name="Sam Choi" color="warm" />
      <Avatar name="Dana Jung" color="neutral" />
    </AvatarGroup>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack gap={4}>
      <AvatarGroup size="sm">
        <Avatar name="Mongle Kim" color="primary" />
        <Avatar name="Jane Park" color="secondary" />
        <Avatar name="Alex Lee" color="accent" />
      </AvatarGroup>
      <AvatarGroup size="md">
        <Avatar name="Mongle Kim" color="primary" />
        <Avatar name="Jane Park" color="secondary" />
        <Avatar name="Alex Lee" color="accent" />
      </AvatarGroup>
      <AvatarGroup size="lg">
        <Avatar name="Mongle Kim" color="primary" />
        <Avatar name="Jane Park" color="secondary" />
        <Avatar name="Alex Lee" color="accent" />
      </AvatarGroup>
    </Stack>
  ),
}

export const WithMax: Story = {
  render: () => (
    <Stack gap={4}>
      <AvatarGroup max={3}>
        <Avatar name="Mongle Kim" color="primary" />
        <Avatar name="Jane Park" color="secondary" />
        <Avatar name="Alex Lee" color="accent" />
        <Avatar name="Sam Choi" color="warm" />
        <Avatar name="Dana Jung" color="neutral" />
      </AvatarGroup>
      <AvatarGroup max={2}>
        <Avatar name="Mongle Kim" color="primary" />
        <Avatar name="Jane Park" color="secondary" />
        <Avatar name="Alex Lee" color="accent" />
        <Avatar name="Sam Choi" color="warm" />
      </AvatarGroup>
    </Stack>
  ),
}

export const ProjectMembers: Story = {
  render: () => (
    <Card className="max-w-xs" variant="elevated">
      <Card.Header>
        <Stack gap={1}>
          <Typography variant="subtitle2">Project members</Typography>
          <Typography variant="caption" color="secondary">
            5 members
          </Typography>
        </Stack>
      </Card.Header>
      <Card.Content>
        <AvatarGroup max={4}>
          <Avatar name="Mongle Kim" color="primary" />
          <Avatar name="Jane Park" color="secondary" />
          <Avatar name="Alex Lee" color="accent" />
          <Avatar name="Sam Choi" color="warm" />
          <Avatar name="Dana Jung" color="neutral" />
        </AvatarGroup>
      </Card.Content>
    </Card>
  ),
}
