import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/general/button'
import { Paper } from '@/components/layout/paper'
import { Stack } from '@/components/layout/stack'
import { TextField } from '@/components/form/text-field'
import { Typography } from '@/components/general/typography'

import { PasswordField } from './PasswordField'

const meta = {
  title: 'Form/PasswordField',
  component: PasswordField,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof PasswordField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
  },
  render: (args) => <PasswordField {...args} />,
}

export const Sizes: Story = {
  render: () => (
    <Stack gap={4}>
      <PasswordField size="sm" label="Small" placeholder="Password" />
      <PasswordField size="md" label="Medium" placeholder="Password" />
      <PasswordField size="lg" label="Large" placeholder="Password" />
    </Stack>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <PasswordField
      label="Password"
      description="At least 8 characters, including a number."
      placeholder="Enter your password"
    />
  ),
}

export const WithError: Story = {
  render: () => (
    <PasswordField
      label="Password"
      error="Password must be at least 8 characters."
      defaultValue="short"
    />
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <PasswordField
      label="Password"
      defaultValue="mysecretpassword"
      description="This field is read-only."
      readOnly
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <PasswordField
      label="Password"
      placeholder="Cannot edit"
      disabled
    />
  ),
}

export const CompositionExample: Story = {
  render: () => (
    <Paper bordered elevation={0} radius="lg" className="w-96 p-8">
      <Stack gap={6}>
        <Stack gap={1}>
          <Typography variant="heading3">Sign in</Typography>
          <Typography variant="body2" color="secondary">
            Welcome back! Please enter your details.
          </Typography>
        </Stack>
        <Stack gap={4}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            placeholder="john@example.com"
          />
          <PasswordField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            description="Forgot your password?"
          />
        </Stack>
        <Button fullWidth>Sign in</Button>
      </Stack>
    </Paper>
  ),
}
