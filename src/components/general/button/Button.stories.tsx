import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRight, Heart } from 'lucide-react'

import { Icon } from '@/components/general/icon'
import { Paper } from '@/components/layout/paper'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { Button } from './Button'

const meta = {
  title: 'General/Button',
  component: Button,
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
      options: [
        'primary',
        'secondary',
        'success',
        'error',
        'warning',
        'info',
      ],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Variants: Story = {
  render: () => (
    <Stack direction="horizontal" align="center">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="soft">Soft</Button>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" align="center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack>
      <Stack direction="horizontal" align="center">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="error">Error</Button>
        <Button color="warning">Warning</Button>
        <Button color="info">Info</Button>
      </Stack>
      <Stack direction="horizontal" align="center">
        <Button variant="soft" color="primary">
          Primary
        </Button>
        <Button variant="soft" color="secondary">
          Secondary
        </Button>
        <Button variant="soft" color="success">
          Success
        </Button>
        <Button variant="soft" color="error">
          Error
        </Button>
        <Button variant="soft" color="warning">
          Warning
        </Button>
        <Button variant="soft" color="info">
          Info
        </Button>
      </Stack>
    </Stack>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Stack direction="horizontal" align="center">
      <Button leftIcon={<Icon icon={Heart} />}>Like</Button>
      <Button rightIcon={<Icon icon={ArrowRight} />}>Next</Button>
      <Button leftIcon={<Icon icon={Heart} />} rightIcon={<Icon icon={ArrowRight} />}>
        Both
      </Button>
    </Stack>
  ),
}

export const Loading: Story = {
  render: () => (
    <Stack direction="horizontal" align="center">
      <Button isLoading>Saving...</Button>
      <Button isLoading variant="outline">
        Saving...
      </Button>
      <Button isLoading variant="soft">
        Saving...
      </Button>
    </Stack>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Stack direction="horizontal" align="center">
      <Button disabled>Solid</Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
      <Button disabled variant="soft">
        Soft
      </Button>
    </Stack>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Paper bordered elevation={0} radius="md" className="w-80 p-4">
      <Stack>
        <Button fullWidth>Full Width</Button>
        <Button fullWidth variant="outline">
          Full Width
        </Button>
      </Stack>
    </Paper>
  ),
}

export const AllVariantsAndColors: Story = {
  render: () => {
    const variants = ['solid', 'outline', 'ghost', 'soft'] as const
    const colors = [
      'primary',
      'secondary',
      'success',
      'error',
      'warning',
      'info',
    ] as const

    return (
      <Stack gap={6}>
        {variants.map((variant) => (
          <div key={variant}>
            <Typography variant="body2" color="secondary" className="mb-2 font-medium">
              {variant}
            </Typography>
            <Stack direction="horizontal" align="center" gap={3}>
              {colors.map((color) => (
                <Button
                  key={color}
                  variant={variant}
                  color={color}
                >
                  {color}
                </Button>
              ))}
            </Stack>
          </div>
        ))}
      </Stack>
    )
  },
}
