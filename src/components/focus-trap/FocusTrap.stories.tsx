import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

import { FocusTrap } from './FocusTrap'

const meta = {
  title: 'Utilities/FocusTrap',
  component: FocusTrap,
  tags: ['autodocs'],
} satisfies Meta<typeof FocusTrap>

export default meta
type Story = StoryObj<typeof meta>

const inputClassName: string =
  'rounded-xl border border-secondary-300 px-3 py-2 text-sm outline-none transition-all focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(255,139,109,0.2)]'

export const Default: Story = {
  args: {
    active: true,
    autoFocus: true,
    restoreFocus: true,
    children: (
      <div />
    ) as React.ReactElement,
  },
  render: (args) => (
    <FocusTrap {...args}>
      <Card variant="outlined" className="max-w-sm">
        <Card.Header>
          <Typography variant="subtitle2">Focus is trapped here</Typography>
        </Card.Header>
        <Card.Content>
          <Stack gap={3}>
            <Typography variant="body2" color="secondary">
              Press Tab to cycle through the fields. Focus will not leave this
              card.
            </Typography>
            <Stack gap={2}>
              {/* TODO: Input 컴포넌트로 교체 */}
              <input className={inputClassName} placeholder="Name" />
              <input
                className={inputClassName}
                type="email"
                placeholder="Email"
              />
              <input
                className={inputClassName}
                type="password"
                placeholder="Password"
              />
            </Stack>
            <Stack direction="horizontal" gap={2} justify="end">
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
              <Button size="sm">Submit</Button>
            </Stack>
          </Stack>
        </Card.Content>
      </Card>
    </FocusTrap>
  ),
}

const ToggleDemo = () => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <Stack gap={4}>
      {/* TODO: Switch 컴포넌트로 교체 */}
      <Stack direction="horizontal" gap={2} align="center">
        <Button
          size="sm"
          variant={active ? 'solid' : 'outline'}
          onClick={() => setActive((prev) => !prev)}
        >
          {active ? 'On' : 'Off'}
        </Button>
        <Typography variant="body2" color="secondary">
          Focus trap
        </Typography>
      </Stack>
      <FocusTrap active={active}>
        <Card variant="outlined" className="max-w-sm">
          <Card.Header>
            <Typography variant="subtitle2">
              {active ? 'Focus is trapped' : 'Focus is free'}
            </Typography>
          </Card.Header>
          <Card.Content>
            <Stack gap={3}>
              <Typography variant="body2" color="secondary">
                {active
                  ? 'Tab will cycle only within these fields.'
                  : 'Click the button above to activate the focus trap.'}
              </Typography>
              <Stack gap={2}>
                {/* TODO: Input 컴포넌트로 교체 */}
                <input className={inputClassName} placeholder="First name" />
                <input className={inputClassName} placeholder="Last name" />
              </Stack>
              <Stack direction="horizontal" gap={2} justify="end">
                <Button variant="outline" size="sm">
                  Save
                </Button>
              </Stack>
            </Stack>
          </Card.Content>
        </Card>
      </FocusTrap>
    </Stack>
  )
}

export const Toggle: Story = {
  name: 'Toggle activation',
  args: {
    active: true,
    children: (<div />) as React.ReactElement,
  },
  render: () => <ToggleDemo />,
}

