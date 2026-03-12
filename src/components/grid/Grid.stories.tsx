import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/components/card'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

import { Grid } from './Grid'

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 12],
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
  },
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

const DemoBlock = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={`flex items-center justify-center rounded-lg bg-primary-100 px-4 py-3 text-sm font-medium text-primary-700 ${className}`}
  >
    {children}
  </div>
)

export const Default: Story = {
  args: {
    columns: 3,
    gap: 4,
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <DemoBlock key={i}>Item {i + 1}</DemoBlock>
      ))}
    </Grid>
  ),
}

export const Columns: Story = {
  name: '컬럼 수',
  render: () => (
    <Stack gap={8}>
      {([1, 2, 3, 4, 6] as const).map((cols) => (
        <div key={cols}>
          <Typography variant="caption" color="disabled" className="mb-2">
            columns={cols}
          </Typography>
          <Grid columns={cols} gap={3}>
            {Array.from({ length: cols * 2 }, (_, i) => (
              <DemoBlock key={i}>{i + 1}</DemoBlock>
            ))}
          </Grid>
        </div>
      ))}
    </Stack>
  ),
}

export const Spacing: Story = {
  name: '간격',
  render: () => (
    <Stack gap={8}>
      {([0, 2, 4, 8] as const).map((value) => (
        <div key={value}>
          <Typography variant="caption" color="disabled" className="mb-2">
            gap={value}
          </Typography>
          <Grid columns={3} gap={value}>
            {Array.from({ length: 6 }, (_, i) => (
              <DemoBlock key={i}>{i + 1}</DemoBlock>
            ))}
          </Grid>
        </div>
      ))}
    </Stack>
  ),
}

export const Align: Story = {
  name: '아이템 정렬 (세로)',
  render: () => (
    <Stack gap={6}>
      {(['start', 'center', 'end', 'stretch'] as const).map((align) => (
        <div key={align}>
          <Typography variant="caption" color="disabled" className="mb-2">
            {align}
          </Typography>
          <Grid
            columns={3}
            gap={3}
            align={align}
            className="rounded-lg border border-dashed border-gray-200 p-3"
          >
            <DemoBlock className="py-2">작은</DemoBlock>
            <DemoBlock className="py-6">큰</DemoBlock>
            <DemoBlock className="py-4">중간</DemoBlock>
          </Grid>
        </div>
      ))}
    </Stack>
  ),
}

export const Justify: Story = {
  name: '아이템 정렬 (가로)',
  render: () => (
    <Stack gap={6}>
      {(['start', 'center', 'end', 'stretch'] as const).map((justify) => (
        <div key={justify}>
          <Typography variant="caption" color="disabled" className="mb-2">
            {justify}
          </Typography>
          <Grid
            columns={3}
            gap={3}
            justify={justify}
            className="rounded-lg border border-dashed border-gray-200 p-3"
          >
            <DemoBlock>1</DemoBlock>
            <DemoBlock>2</DemoBlock>
            <DemoBlock>3</DemoBlock>
          </Grid>
        </div>
      ))}
    </Stack>
  ),
}

export const ColumnSpan: Story = {
  name: '컬럼 병합 (col-span)',
  render: () => (
    <Grid columns={4} gap={4}>
      <DemoBlock className="col-span-2 py-6">col-span-2</DemoBlock>
      <DemoBlock className="py-6">1</DemoBlock>
      <DemoBlock className="py-6">1</DemoBlock>
      <DemoBlock className="py-6">1</DemoBlock>
      <DemoBlock className="col-span-3 py-6">col-span-3</DemoBlock>
      <DemoBlock className="col-span-4 py-6">col-span-4 (full)</DemoBlock>
    </Grid>
  ),
}

export const CompositionExample: Story = {
  name: '조합 예시 — 카드 갤러리',
  render: () => (
    <Grid columns={3} gap={6}>
      {Array.from({ length: 6 }, (_, i) => (
        <Card key={i}>
          <Card.Content>
            <Stack gap={3}>
              <div className="flex h-24 items-center justify-center rounded-lg bg-primary-50">
                <Typography variant="heading3" color="primary">
                  {i + 1}
                </Typography>
              </div>
              <Stack gap={1}>
                <Typography variant="body1" className="font-medium">
                  카드 제목 {i + 1}
                </Typography>
                <Typography variant="body2" color="secondary">
                  카드에 대한 간단한 설명이 들어갑니다.
                </Typography>
              </Stack>
            </Stack>
          </Card.Content>
        </Card>
      ))}
    </Grid>
  ),
}

const StatCard = ({
  label,
  value,
  change,
  positive,
}: {
  label: string
  value: string
  change: string
  positive: boolean
}) => (
  <Card>
    <Card.Content>
      <Stack gap={2}>
        <Typography variant="body2" color="secondary">
          {label}
        </Typography>
        <Typography variant="heading4">{value}</Typography>
        <Typography
          variant="body2"
          color={positive ? 'success' : 'error'}
          className="font-medium"
        >
          {positive ? '↑' : '↓'} {change}
        </Typography>
      </Stack>
    </Card.Content>
  </Card>
)

export const DashboardExample: Story = {
  name: '조합 예시 — 대시보드',
  render: () => (
    <Stack gap={6}>
      <Grid columns={4} gap={4}>
        <StatCard label="총 매출" value="₩12,450,000" change="12.5%" positive />
        <StatCard label="주문 수" value="1,234" change="8.2%" positive />
        <StatCard label="방문자" value="45,678" change="3.1%" positive={false} />
        <StatCard label="전환율" value="2.4%" change="0.5%" positive />
      </Grid>

      <Grid columns={3} gap={4}>
        <Card className="col-span-2">
          <Card.Header>
            <Typography variant="subtitle2">매출 추이</Typography>
          </Card.Header>
          <Card.Content>
            <div className="flex h-48 items-center justify-center rounded-lg bg-gray-50">
              <Typography variant="body2" color="disabled">
                차트 영역
              </Typography>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Header>
            <Typography variant="subtitle2">인기 상품</Typography>
          </Card.Header>
          <Card.Content>
            <Stack gap={2}>
              {['몽글 쿠션', '포근 담요', '솜사탕 캔들', '구름 조명'].map(
                (item, i) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2"
                  >
                    <Typography variant="body2">
                      {i + 1}. {item}
                    </Typography>
                    <Typography variant="caption" color="disabled">
                      {(120 - i * 23).toLocaleString()}개
                    </Typography>
                  </div>
                )
              )}
            </Stack>
          </Card.Content>
        </Card>
      </Grid>
    </Stack>
  ),
}
