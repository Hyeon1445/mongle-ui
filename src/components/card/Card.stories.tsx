import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Grid } from '@/components/grid'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

import { Card } from './Card'

const meta = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'elevated', 'filled'],
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <Card.Header>
        <Typography variant="subtitle2">공지사항</Typography>
      </Card.Header>
      <Card.Body>
        <Stack gap={2}>
          <Typography variant="body2" color="secondary">
            몽글 UI v1.0이 출시되었습니다.
          </Typography>
          <Typography variant="body2" color="secondary">
            새로운 컴포넌트와 개선된 디자인 토큰을 확인해보세요.
          </Typography>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" gap={2}>
          <Button size="sm">자세히 보기</Button>
          <Button size="sm" variant="ghost">닫기</Button>
        </Stack>
      </Card.Footer>
    </Card>
  ),
}

export const Variants: Story = {
  name: '변형',
  render: () => (
    <Grid columns={3} gap={6}>
      {(['outlined', 'elevated', 'filled'] as const).map((variant) => (
        <Card key={variant} variant={variant}>
          <Card.Header>
            <Typography variant="subtitle2">{variant}</Typography>
          </Card.Header>
          <Card.Body>
            <Typography variant="body2" color="secondary">
              카드의 {variant} 스타일입니다.
            </Typography>
          </Card.Body>
        </Card>
      ))}
    </Grid>
  ),
}

export const HeaderOnly: Story = {
  name: 'Header + Body',
  render: () => (
    <Card className="max-w-sm">
      <Card.Header>
        <Stack direction="horizontal" justify="between" align="center">
          <Typography variant="subtitle2">알림</Typography>
          <Typography variant="caption" color="primary">
            모두 읽기
          </Typography>
        </Stack>
      </Card.Header>
      <Card.Body>
        <Stack gap={3}>
          {['새로운 댓글이 달렸습니다.', '주문이 완료되었습니다.', '배송이 시작되었습니다.'].map(
            (msg) => (
              <Typography key={msg} variant="body2" color="secondary">
                {msg}
              </Typography>
            ),
          )}
        </Stack>
      </Card.Body>
    </Card>
  ),
}

export const WithDivider: Story = {
  name: 'Divider 활용',
  render: () => (
    <Card className="max-w-sm">
      <Card.Header>
        <Typography variant="subtitle2">주문 요약</Typography>
      </Card.Header>
      <Card.Body>
        <Stack gap={3}>
          <Stack direction="horizontal" justify="between">
            <Typography variant="body2" color="secondary">
              몽글 쿠션
            </Typography>
            <Typography variant="body2">₩35,000</Typography>
          </Stack>
          <Stack direction="horizontal" justify="between">
            <Typography variant="body2" color="secondary">
              포근 담요
            </Typography>
            <Typography variant="body2">₩48,000</Typography>
          </Stack>
          <Divider />
          <Stack direction="horizontal" justify="between">
            <Typography variant="body1" className="font-medium">
              합계
            </Typography>
            <Typography variant="body1" color="primary" className="font-bold">
              ₩83,000
            </Typography>
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button fullWidth>결제하기</Button>
      </Card.Footer>
    </Card>
  ),
}

export const ProfileCard: Story = {
  name: '조합 예시 — 프로필 카드',
  render: () => (
    <Card className="max-w-xs" variant="elevated">
      <Card.Body>
        <Stack gap={4} align="center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
            <Typography variant="heading4" color="primary">
              M
            </Typography>
          </div>
          <Stack gap={1} align="center">
            <Typography variant="subtitle2">몽글</Typography>
            <Typography variant="body2" color="secondary">
              mongle@example.com
            </Typography>
          </Stack>
          <Divider className="w-full" />
          <Stack direction="horizontal" gap={8}>
            <Stack align="center" gap={0}>
              <Typography variant="subtitle2">128</Typography>
              <Typography variant="caption" color="secondary">
                게시글
              </Typography>
            </Stack>
            <Stack align="center" gap={0}>
              <Typography variant="subtitle2">1.2K</Typography>
              <Typography variant="caption" color="secondary">
                팔로워
              </Typography>
            </Stack>
            <Stack align="center" gap={0}>
              <Typography variant="subtitle2">356</Typography>
              <Typography variant="caption" color="secondary">
                팔로잉
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" gap={3}>
          <Button fullWidth variant="soft">
            메시지
          </Button>
          <Button fullWidth>팔로우</Button>
        </Stack>
      </Card.Footer>
    </Card>
  ),
}