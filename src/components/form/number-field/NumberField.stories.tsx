import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/general/button'
import { Paper } from '@/components/layout/paper'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { NumberField } from './NumberField'

const meta = {
  title: 'Form/NumberField',
  component: NumberField,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof NumberField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Quantity',
    defaultValue: 1,
  },
  render: (args) => <NumberField {...args} />,
}

export const Sizes: Story = {
  render: () => (
    <Stack gap={4}>
      <NumberField size="sm" label="Small" defaultValue={0} />
      <NumberField size="md" label="Medium" defaultValue={0} />
      <NumberField size="lg" label="Large" defaultValue={0} />
    </Stack>
  ),
}

export const WithMinMax: Story = {
  render: () => (
    <Stack gap={4}>
      <NumberField
        label="Age"
        description="Must be between 1 and 120."
        min={1}
        max={120}
        defaultValue={25}
      />
      <NumberField
        label="Step by 5"
        description="Increments in steps of 5."
        step={5}
        defaultValue={0}
      />
    </Stack>
  ),
}

export const WithError: Story = {
  render: () => (
    <NumberField
      label="Quantity"
      error="Quantity must be at least 1."
      defaultValue={0}
      min={1}
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <NumberField
      label="Quantity"
      defaultValue={3}
      disabled
    />
  ),
}

export const CompositionExample: Story = {
  render: () => (
    <Paper bordered elevation={0} radius="lg" className="w-96 p-8">
      <Stack gap={6}>
        <Stack gap={1}>
          <Typography variant="heading3">Order summary</Typography>
          <Typography variant="body2" color="secondary">
            Adjust the quantity before checkout.
          </Typography>
        </Stack>
        <Stack gap={4}>
          <NumberField
            fullWidth
            label="Quantity"
            description="Max 99 per order."
            min={1}
            max={99}
            defaultValue={1}
          />
          <NumberField
            fullWidth
            label="Gift wrap quantity"
            min={0}
            defaultValue={0}
          />
        </Stack>
        <Button fullWidth>Add to cart</Button>
      </Stack>
    </Paper>
  ),
}
