import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

const meta = {
  title: 'Theme/BorderRadius',
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type RadiusToken = {
  name: string
  radius: string
  value: string
  usage: string
}

const RADII: RadiusToken[] = [
  { name: 'none', radius: '0', value: '0', usage: '—' },
  { name: 'sm', radius: '0.25rem', value: '0.25rem / 4px', usage: '—' },
  { name: 'md', radius: '0.5rem', value: '0.5rem / 8px', usage: 'Badge sm' },
  { name: 'lg', radius: '0.75rem', value: '0.75rem / 12px', usage: 'Button sm · Input sm' },
  { name: 'xl', radius: '1rem', value: '1rem / 16px', usage: 'Button md/lg · Input md/lg' },
  { name: '2xl', radius: '1.5rem', value: '1.5rem / 24px', usage: 'Card' },
  { name: '3xl', radius: '2rem', value: '2rem / 32px', usage: '—' },
  { name: 'full', radius: '9999px', value: '9999px', usage: 'Avatar · Pill Badge' },
]

export const Scale: Story = {
  render: () => (
    <Stack gap={4}>
      {RADII.map(({ name, radius, value, usage }) => (
        <Stack key={name} direction="horizontal" gap={6} align="center">
          <div
            className="shrink-0"
            style={{ width: '8rem', height: '3.5rem', borderRadius: radius, backgroundColor: '#FFE4DF' }}
          />
          <Stack gap={0}>
            <Typography variant="body2">{name}</Typography>
            <Typography variant="caption" color="secondary">
              {value}{usage !== '—' ? ` · ${usage}` : ''}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  ),
}
