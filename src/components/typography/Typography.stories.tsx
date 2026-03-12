import type { Meta, StoryObj } from '@storybook/react-vite'

import { Box } from '@/components/box'
import { Card } from '@/components/card'
import { Divider } from '@/components/divider'
import { Stack } from '@/components/stack'

import { Typography, TypographyVariant } from './Typography'

const meta = {
  title: 'General/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'heading1',
        'heading2',
        'heading3',
        'heading4',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
      ],
    },
    color: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'disabled',
        'primary',
        'error',
        'success',
        'warning',
        'info',
        'inherit',
      ],
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '안녕하세요, 몽글 UI입니다.',
  },
}

const VARIANT_INFO: {
  variant: TypographyVariant
  label: string
  desc: string
}[] = [
  { variant: 'heading1', label: 'Heading 1', desc: '3rem / Bold' },
  { variant: 'heading2', label: 'Heading 2', desc: '2.25rem / Bold' },
  { variant: 'heading3', label: 'Heading 3', desc: '1.875rem / Semibold' },
  { variant: 'heading4', label: 'Heading 4', desc: '1.5rem / Semibold' },
  { variant: 'subtitle1', label: 'Subtitle 1', desc: '1.25rem / Semibold' },
  { variant: 'subtitle2', label: 'Subtitle 2', desc: '1.125rem / Medium' },
  { variant: 'body1', label: 'Body 1', desc: '1rem / Normal' },
  { variant: 'body2', label: 'Body 2', desc: '0.875rem / Normal' },
  { variant: 'caption', label: 'Caption', desc: '0.75rem / Normal' },
  { variant: 'overline', label: 'Overline', desc: '0.75rem / Semibold' },
]

export const Variants: Story = {
  render: () => (
    <Stack gap={0}>
      {VARIANT_INFO.map(({ variant, label, desc }) => (
        <Box
          key={variant}
          paddingY={4}
          className="flex items-baseline gap-6 border-b border-gray-100 last:border-b-0"
        >
          <Typography variant="caption" color="disabled" className="w-28 shrink-0">{desc}</Typography>
          <Typography variant={variant}>
            {label} — 다람쥐 헌 쳇바퀴에 타고파
          </Typography>
        </Box>
      ))}
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="horizontal" gap={6} wrap>
      {(
        [
          ['default', 'Default'],
          ['secondary', 'Secondary'],
          ['disabled', 'Disabled'],
          ['primary', 'Primary'],
          ['error', 'Error'],
          ['success', 'Success'],
          ['warning', 'Warning'],
          ['info', 'Info'],
        ] as const
      ).map(([color, label]) => (
        <Stack key={color} align="center" gap={2}>
          <Box
            radius="xl"
            className="flex h-16 w-16 items-center justify-center bg-gray-50"
          >
            <Typography variant="heading4" color={color}>
              Aa
            </Typography>
          </Box>
          <Typography variant="caption" color="secondary">
            {label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  ),
}

export const Ellipsis: Story = {
  render: () => (
    <Stack>
      <Card className="max-w-xs">
        <Card.Header>
          <Typography variant="subtitle2">말줄임 적용</Typography>
        </Card.Header>
        <Card.Content>
          <Typography ellipsis color="secondary">
            이 텍스트는 매우 길어서 컨테이너 너비를 초과하면 말줄임표로
            처리됩니다.
          </Typography>
        </Card.Content>
      </Card>
      <Card className="max-w-xs">
        <Card.Header>
          <Typography variant="subtitle2">말줄임 미적용</Typography>
        </Card.Header>
        <Card.Content>
          <Typography color="secondary">
            이 텍스트는 매우 길어서 컨테이너 너비를 초과하면 말줄임표로
            처리됩니다.
          </Typography>
        </Card.Content>
      </Card>
    </Stack>
  ),
}

export const AsOverride: Story = {
  name: 'as prop 오버라이드',
  render: () => (
    <Stack>
      {(
        [
          ['heading1', 'p', 'heading1 스타일이지만 <p> 태그'],
          ['body1', 'span', 'body1 스타일이지만 <span> 태그'],
          ['caption', 'label', 'caption 스타일이지만 <label> 태그'],
        ] as const
      ).map(([variant, as, text]) => (
        <Box
          key={variant}
          paddingY={4}
          className="flex items-baseline gap-4 border-b border-gray-100 last:border-b-0"
        >
          <Box
            paddingX={2}
            paddingY={1}
            radius="md"
            className="w-40 shrink-0 bg-gray-100 text-center"
          >
            <Typography variant="caption" color="disabled" className="font-mono">
              {variant} → &lt;{as}&gt;
            </Typography>
          </Box>
          <Typography variant={variant} as={as}>
            {text}
          </Typography>
        </Box>
      ))}
    </Stack>
  ),
}

export const CompositionExample: Story = {
  name: '조합 예시',
  render: () => (
    <Card className="max-w-lg">
      <Card.Header>
        <Stack gap={3}>
          <Typography variant="overline" color="primary">
            디자인 시스템
          </Typography>
          <Typography variant="heading2">몽글 UI</Typography>
          <Typography variant="subtitle1" color="secondary">
            따뜻하고 포근한 React 컴포넌트 라이브러리
          </Typography>
        </Stack>
      </Card.Header>
      <Card.Content>
        <Stack gap={2}>
          <Typography variant="body1">
            몽글 UI는 사용자에게 편안한 경험을 제공하기 위해 설계된 디자인
            시스템입니다. 코랄 톤의 프라이머리 컬러와 부드러운 그림자, 자연스러운
            애니메이션을 특징으로 합니다.
          </Typography>
          <Typography variant="body2" color="secondary">
            누구나 쉽게 사용할 수 있는 접근성 높은 컴포넌트를 지향합니다.
          </Typography>
        </Stack>
      </Card.Content>
      <Divider color="light" />
      <Card.Footer>
        <Typography variant="caption" color="disabled">
          마지막 업데이트: 2026년 3월
        </Typography>
      </Card.Footer>
    </Card>
  ),
}
