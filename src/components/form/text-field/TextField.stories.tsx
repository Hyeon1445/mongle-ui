import type { Meta, StoryObj } from '@storybook/react-vite'
import { Mail, Search, User } from 'lucide-react'

import { Icon } from '@/components/general/icon'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'
import { Button } from '@/components/general/button'
import { Paper } from '@/components/layout/paper'

import { TextField } from './TextField'

const meta = {
  title: 'Form/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
  render: (args) => <TextField {...args} />,
}

export const Sizes: Story = {
  render: () => (
    <Stack gap={4}>
      <TextField size="sm" label="Small" placeholder="Small input" />
      <TextField size="md" label="Medium" placeholder="Medium input" />
      <TextField size="lg" label="Large" placeholder="Large input" />
    </Stack>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <TextField
      label="Email"
      description="We'll never share your email with anyone."
      placeholder="user@example.com"
    />
  ),
}

export const WithError: Story = {
  render: () => (
    <TextField
      label="Email"
      description="We'll never share your email with anyone."
      error="Please enter a valid email address."
      placeholder="user@example.com"
      defaultValue="not-an-email"
    />
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Stack gap={4}>
      <TextField
        label="Search"
        placeholder="Search..."
        leftElement={<Icon icon={Search} size="sm" aria-hidden />}
      />
      <TextField
        label="Email"
        placeholder="user@example.com"
        leftElement={<Icon icon={Mail} size="sm" aria-hidden />}
      />
      <TextField
        label="Username"
        placeholder="johndoe"
        leftElement={<Icon icon={User} size="sm" aria-hidden />}
      />
    </Stack>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Stack gap={4}>
      <TextField
        label="Disabled"
        placeholder="Cannot edit"
        defaultValue="Readonly value"
        disabled
      />
      <TextField
        label="Disabled with error"
        error="This field has an error"
        defaultValue="Bad value"
        disabled
      />
    </Stack>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Paper bordered elevation={0} radius="md" className="w-96 p-6">
      <Stack gap={4}>
        <TextField
          fullWidth
          label="Full name"
          placeholder="John Doe"
        />
        <TextField
          fullWidth
          label="Email"
          placeholder="john@example.com"
          description="Work email preferred."
        />
        <Button fullWidth>Submit</Button>
      </Stack>
    </Paper>
  ),
}

export const CompositionExample: Story = {
  render: () => (
    <Paper bordered elevation={0} radius="lg" className="w-96 p-8">
      <Stack gap={6}>
        <Stack gap={1}>
          <Typography variant="heading3">Sign up</Typography>
          <Typography variant="body2" color="secondary">
            Create your account to get started.
          </Typography>
        </Stack>
        <Stack gap={4}>
          <TextField
            fullWidth
            label="Full name"
            placeholder="John Doe"
            leftElement={<Icon icon={User} size="sm" aria-hidden />}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            placeholder="john@example.com"
            leftElement={<Icon icon={Mail} size="sm" aria-hidden />}
            description="We'll send a confirmation link."
          />
          <TextField
            fullWidth
            label="Email (error state)"
            type="email"
            placeholder="john@example.com"
            leftElement={<Icon icon={Mail} size="sm" aria-hidden />}
            defaultValue="not-an-email"
            error="Please enter a valid email address."
          />
        </Stack>
        <Button fullWidth>Create account</Button>
      </Stack>
    </Paper>
  ),
}
