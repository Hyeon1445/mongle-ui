import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

const meta = {
  title: 'Theme/Colors',
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type ColorScale = {
  shade: string
  hex: string
}

type ColorGroup = {
  name: string
  token: string
  description: string
  scales: ColorScale[]
}

const COLOR_GROUPS: ColorGroup[] = [
  {
    name: 'Primary',
    token: 'primary',
    description: 'Coral — 브랜드 메인 컬러',
    scales: [
      { shade: '50', hex: '#FFF5F3' },
      { shade: '100', hex: '#FFE4DF' },
      { shade: '200', hex: '#FFC9BD' },
      { shade: '300', hex: '#FFAD9B' },
      { shade: '400', hex: '#FF9279' },
      { shade: '500', hex: '#FF8B6D' },
      { shade: '600', hex: '#E67758' },
      { shade: '700', hex: '#CC6346' },
      { shade: '800', hex: '#B34F35' },
      { shade: '900', hex: '#993B23' },
    ],
  },
  {
    name: 'Secondary',
    token: 'secondary',
    description: 'Periwinkle — 브랜드 서브 컬러',
    scales: [
      { shade: '50', hex: '#F5F7FF' },
      { shade: '100', hex: '#E8ECFF' },
      { shade: '200', hex: '#D1D9FF' },
      { shade: '300', hex: '#BAC6FF' },
      { shade: '400', hex: '#9CA9FA' },
      { shade: '500', hex: '#818CF8' },
      { shade: '600', hex: '#6366F1' },
      { shade: '700', hex: '#4F46E5' },
      { shade: '800', hex: '#4338CA' },
      { shade: '900', hex: '#3730A3' },
    ],
  },
  {
    name: 'Success',
    token: 'success',
    description: 'Mint — 성공 / avatar accent',
    scales: [
      { shade: '50', hex: '#F0FDF9' },
      { shade: '100', hex: '#CCFBEF' },
      { shade: '200', hex: '#99F6E0' },
      { shade: '300', hex: '#5FEDD3' },
      { shade: '400', hex: '#2DD4BF' },
      { shade: '500', hex: '#14B8A6' },
      { shade: '600', hex: '#0D9488' },
      { shade: '700', hex: '#0F766E' },
      { shade: '800', hex: '#115E59' },
      { shade: '900', hex: '#134E4A' },
    ],
  },
  {
    name: 'Warning',
    token: 'warning',
    description: 'Amber — 경고 / avatar warm',
    scales: [
      { shade: '50', hex: '#FFFBEB' },
      { shade: '100', hex: '#FEF3C7' },
      { shade: '200', hex: '#FDE68A' },
      { shade: '300', hex: '#FCD34D' },
      { shade: '400', hex: '#FBBF24' },
      { shade: '500', hex: '#F59E0B' },
      { shade: '600', hex: '#D97706' },
      { shade: '700', hex: '#B45309' },
      { shade: '800', hex: '#92400E' },
      { shade: '900', hex: '#78350F' },
    ],
  },
  {
    name: 'Error',
    token: 'error',
    description: 'Red — 오류',
    scales: [
      { shade: '50', hex: '#FEF2F2' },
      { shade: '100', hex: '#FEE2E2' },
      { shade: '200', hex: '#FECACA' },
      { shade: '300', hex: '#FCA5A5' },
      { shade: '400', hex: '#F87171' },
      { shade: '500', hex: '#EF4444' },
      { shade: '600', hex: '#DC2626' },
      { shade: '700', hex: '#B91C1C' },
      { shade: '800', hex: '#991B1B' },
      { shade: '900', hex: '#7F1D1D' },
    ],
  },
  {
    name: 'Info',
    token: 'info',
    description: 'Blue — 정보',
    scales: [
      { shade: '50', hex: '#EFF6FF' },
      { shade: '100', hex: '#DBEAFE' },
      { shade: '200', hex: '#BFDBFE' },
      { shade: '300', hex: '#93C5FD' },
      { shade: '400', hex: '#60A5FA' },
      { shade: '500', hex: '#3B82F6' },
      { shade: '600', hex: '#2563EB' },
      { shade: '700', hex: '#1D4ED8' },
      { shade: '800', hex: '#1E40AF' },
      { shade: '900', hex: '#1E3A8A' },
    ],
  },
  {
    name: 'Gray',
    token: 'gray',
    description: 'Neutral — 텍스트 / 배경 / 보더',
    scales: [
      { shade: '50', hex: '#FAFAF9' },
      { shade: '100', hex: '#F5F5F4' },
      { shade: '200', hex: '#E7E5E4' },
      { shade: '300', hex: '#D6D3D1' },
      { shade: '400', hex: '#A8A29E' },
      { shade: '500', hex: '#78716C' },
      { shade: '600', hex: '#57534E' },
      { shade: '700', hex: '#44403C' },
      { shade: '800', hex: '#292524' },
      { shade: '900', hex: '#1C1917' },
    ],
  },
]

export const Scale: Story = {
  render: () => (
    <Stack gap={8}>
      {COLOR_GROUPS.map((group) => (
        <Stack key={group.token} gap={3}>
          <Stack gap={0}>
            <Typography variant="subtitle2">{group.name}</Typography>
            <Typography variant="caption" color="secondary">{group.description}</Typography>
          </Stack>
          <Stack direction="horizontal" gap={1}>
            {group.scales.map(({ shade, hex }) => (
              <Stack key={shade} gap={1} className="min-w-0 flex-1">
                <div className="h-10 rounded-lg" style={{ backgroundColor: hex }} />
                <Typography variant="caption" color="secondary">{shade}</Typography>
                <Typography variant="caption" color="secondary" className="truncate">{hex}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  ),
}
