import type { Meta, StoryObj } from '@storybook/react-vite'

import React from 'react'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'
import { Button } from '@/components/general/button'

const meta = {
  title: 'Theme/Animation',
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type AnimationToken = {
  name: string
  twClass: string
  description: string
  duration: string
}

const ANIMATIONS: AnimationToken[] = [
  {
    name: 'bounceIn',
    twClass: 'animate-bounceIn',
    description: '등장 시 살짝 커졌다 돌아오는 효과 — 모달 / 팝오버',
    duration: '300ms · cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  {
    name: 'fadeIn',
    twClass: 'animate-fadeIn',
    description: '아래에서 위로 페이드인 — 드롭다운 / 알림',
    duration: '200ms · cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
]

const AnimationDemo = ({ twClass, name }: { twClass: string; name: string }) => {
  const [key, setKey] = React.useState(0)

  return (
    <Stack gap={3}>
      <div
        key={key}
        className={`${twClass} flex h-20 w-32 items-center justify-center rounded-xl bg-primary-100`}
      >
        <Typography variant="caption" color="primary">{name}</Typography>
      </div>
      <Button size="sm" variant="outline" onClick={() => setKey((k) => k + 1)}>
        Replay
      </Button>
    </Stack>
  )
}

export const Scale: Story = {
  render: () => (
    <Stack gap={8}>
      <Stack gap={4}>
        <Typography variant="subtitle2" color="secondary">Keyframe Animations</Typography>
        <Stack direction="horizontal" gap={8} align="start">
          {ANIMATIONS.map(({ name, twClass, description, duration }) => (
            <Stack key={name} gap={3}>
              <AnimationDemo twClass={twClass} name={name} />
              <Stack gap={0}>
                <Typography variant="body2">{name}</Typography>
                <Typography variant="caption" color="secondary">{description}</Typography>
                <Typography variant="caption" color="secondary">{duration}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack gap={4}>
        <Typography variant="subtitle2" color="secondary">Transition</Typography>
        <Stack gap={2}>
          {[
            { label: 'Default', value: '200ms · cubic-bezier(0.34, 1.56, 0.64, 1)', note: '인터랙티브 요소 기본 — 약간의 bounce' },
            { label: 'Slow', value: '300ms · cubic-bezier(0.34, 1.56, 0.64, 1)', note: '모달 / 드로어' },
          ].map(({ label, value, note }) => (
            <Stack key={label} direction="horizontal" gap={4} align="center">
              <Typography variant="body2" className="w-16 shrink-0">{label}</Typography>
              <Stack gap={0}>
                <Typography variant="caption">{value}</Typography>
                <Typography variant="caption" color="secondary">{note}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  ),
}
