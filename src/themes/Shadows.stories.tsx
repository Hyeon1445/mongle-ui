import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

const meta = {
  title: 'Theme/Shadows',
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const SHADOWS = [
  { name: 'xs', className: 'shadow-xs', description: '0 1px 2px — 아주 미세한 그림자' },
  { name: 'sm', className: 'shadow-sm', description: '0 1px 3px — 카드 기본' },
  { name: 'default', className: 'shadow', description: '0 2px 8px — 기본 elevation' },
  { name: 'md', className: 'shadow-md', description: '0 4px 12px — 드롭다운 / 팝오버' },
  { name: 'lg', className: 'shadow-lg', description: '0 8px 20px — 모달 / 드로어' },
  { name: 'xl', className: 'shadow-xl', description: '0 12px 28px — 최상위 레이어' },
  { name: 'soft', className: 'shadow-soft', description: '0 4px 20px — 부드러운 확산 (몽글 감성)' },
  { name: 'cozy', className: 'shadow-cozy', description: '0 8px 32px — 아늑한 깊이 (몽글 감성)' },
  { name: 'inner', className: 'shadow-inner', description: 'inset 0 2px 4px — 눌린 느낌' },
] as const

const ShadowBox = ({ name, className, description }: typeof SHADOWS[number]) => (
  <Stack gap={6}>
    <div className={`${className} h-24 rounded-xl bg-neutral-50`} />
    <Stack gap={0}>
      <Typography variant="body2">{name}</Typography>
      <Typography variant="caption" color="secondary">{description}</Typography>
    </Stack>
  </Stack>
)

export const Scale: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-x-6 gap-y-10 p-8">
      <ShadowBox {...SHADOWS[0]} />
      <ShadowBox {...SHADOWS[1]} />
      <ShadowBox {...SHADOWS[2]} />
      <ShadowBox {...SHADOWS[3]} />
      <ShadowBox {...SHADOWS[4]} />
      <ShadowBox {...SHADOWS[5]} />
      <ShadowBox {...SHADOWS[6]} />
      <ShadowBox {...SHADOWS[7]} />
      <ShadowBox {...SHADOWS[8]} />
    </div>
  ),
}
