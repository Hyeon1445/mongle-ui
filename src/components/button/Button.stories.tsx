import type { Meta, StoryObj } from '@storybook/react-vite'

import { Box } from '@/components/box'
import { Paper } from '@/components/paper'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

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
    children: '버튼',
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

const HeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="100%"
    height="100%"
  >
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    width="100%"
    height="100%"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
)

export const WithIcons: Story = {
  render: () => (
    <Stack direction="horizontal" align="center">
      <Button leftIcon={<HeartIcon />}>좋아요</Button>
      <Button rightIcon={<ArrowRightIcon />}>다음</Button>
      <Button leftIcon={<HeartIcon />} rightIcon={<ArrowRightIcon />}>
        둘 다
      </Button>
    </Stack>
  ),
}

export const Loading: Story = {
  render: () => (
    <Stack direction="horizontal" align="center">
      <Button isLoading>저장 중...</Button>
      <Button isLoading variant="outline">
        저장 중...
      </Button>
      <Button isLoading variant="soft">
        저장 중...
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
        <Button fullWidth>전체 너비 버튼</Button>
        <Button fullWidth variant="outline">
          전체 너비 버튼
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
          <Box key={variant}>
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
          </Box>
        ))}
      </Stack>
    )
  },
}
