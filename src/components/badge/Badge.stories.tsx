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
  name: '변형',
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
  name: '색상',
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
  name: '크기',
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </Stack>
  ),
}

export const CompositionExample: Story = {
  name: '조합 예시 — 상품 카드',
  render: () => (
    <Card className="max-w-xs" variant="elevated">
      <Stack gap={3}>
        <Stack direction="horizontal" gap={2}>
          <Badge size="sm" variant="solid" color="error">
            HOT
          </Badge>
          <Badge size="sm" color="warning">
            한정판매
          </Badge>
        </Stack>
        <Stack gap={1}>
          <Typography variant="subtitle2">몽글 구름 쿠션</Typography>
          <Typography variant="body2" color="secondary">
            포근하고 부드러운 구름 위에 앉은 듯한 느낌
          </Typography>
        </Stack>
        <Stack direction="horizontal" justify="between" align="center">
          <Typography variant="body1" className="font-bold">
            ₩35,000
          </Typography>
          <Badge size="sm" color="success">
            무료배송
          </Badge>
        </Stack>
        <Button fullWidth>장바구니 담기</Button>
      </Stack>
    </Card>
  ),
}

export const ProfileExample: Story = {
  name: '조합 예시 — 프로필',
  render: () => (
    <Card className="max-w-xs" variant="elevated">
      <Stack gap={4} align="center">
        <Avatar name="몽글" size="lg" />
        <Stack gap={1} align="center">
          <Stack direction="horizontal" gap={2} align="center">
            <Typography variant="subtitle2">몽글</Typography>
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
          <Badge color="primary">디자인</Badge>
          <Badge color="secondary">프론트엔드</Badge>
          <Badge color="success">UX</Badge>
        </Stack>
        <Button fullWidth variant="soft">
          프로필 편집
        </Button>
      </Stack>
    </Card>
  ),
}
