import type { Meta, StoryObj } from '@storybook/react-vite'

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
    <div className="flex flex-col">
      {VARIANT_INFO.map(({ variant, label, desc }) => (
        <div
          key={variant}
          className="flex items-baseline gap-6 border-b border-gray-100 py-4 last:border-b-0"
        >
          <span className="w-28 shrink-0 text-xs text-gray-400">{desc}</span>
          <Typography variant={variant}>
            {label} — 다람쥐 헌 쳇바퀴에 타고파
          </Typography>
        </div>
      ))}
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
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
        <div key={color} className="flex flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50">
            <Typography variant="heading4" color={color}>
              Aa
            </Typography>
          </div>
          <Typography variant="caption" color="secondary">
            {label}
          </Typography>
        </div>
      ))}
    </div>
  ),
}

export const Ellipsis: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="max-w-xs rounded-xl border border-gray-200 p-4">
        <Typography variant="subtitle2" className="mb-1">
          말줄임 적용
        </Typography>
        <Typography ellipsis color="secondary">
          이 텍스트는 매우 길어서 컨테이너 너비를 초과하면 말줄임표로
          처리됩니다.
        </Typography>
      </div>
      <div className="max-w-xs rounded-xl border border-gray-200 p-4">
        <Typography variant="subtitle2" className="mb-1">
          말줄임 미적용
        </Typography>
        <Typography color="secondary">
          이 텍스트는 매우 길어서 컨테이너 너비를 초과하면 말줄임표로
          처리됩니다.
        </Typography>
      </div>
    </div>
  ),
}

export const AsOverride: Story = {
  name: 'as prop 오버라이드',
  render: () => (
    <div className="flex flex-col gap-4">
      {(
        [
          ['heading1', 'p', 'heading1 스타일이지만 <p> 태그'],
          ['body1', 'span', 'body1 스타일이지만 <span> 태그'],
          ['caption', 'label', 'caption 스타일이지만 <label> 태그'],
        ] as const
      ).map(([variant, as, text]) => (
        <div
          key={variant}
          className="flex items-baseline gap-4 border-b border-gray-100 pb-4 last:border-b-0"
        >
          <span className="w-40 shrink-0 rounded-md bg-gray-100 px-2 py-1 text-center font-mono text-xs text-gray-500">
            {variant} → &lt;{as}&gt;
          </span>
          <Typography variant={variant} as={as}>
            {text}
          </Typography>
        </div>
      ))}
    </div>
  ),
}

export const CompositionExample: Story = {
  name: '조합 예시',
  render: () => (
    <article className="max-w-lg rounded-2xl border border-gray-200 p-8">
      <Typography variant="overline" color="primary" className="mb-2">
        디자인 시스템
      </Typography>
      <Typography variant="heading2" className="mb-3">
        몽글 UI
      </Typography>
      <Typography variant="subtitle1" color="secondary" className="mb-6">
        따뜻하고 포근한 React 컴포넌트 라이브러리
      </Typography>
      <Typography variant="body1" className="mb-2">
        몽글 UI는 사용자에게 편안한 경험을 제공하기 위해 설계된 디자인
        시스템입니다. 코랄 톤의 프라이머리 컬러와 부드러운 그림자, 자연스러운
        애니메이션을 특징으로 합니다.
      </Typography>
      <Typography variant="body2" color="secondary" className="mb-6">
        누구나 쉽게 사용할 수 있는 접근성 높은 컴포넌트를 지향합니다.
      </Typography>
      <div className="border-t border-gray-100 pt-4">
        <Typography variant="caption" color="disabled">
          마지막 업데이트: 2026년 3월
        </Typography>
      </div>
    </article>
  ),
}
