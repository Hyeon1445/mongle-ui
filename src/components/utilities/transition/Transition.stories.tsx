import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/general/button'
import { Card } from '@/components/layout/card'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import { Typography } from '@/components/general/typography'

import { Transition } from './Transition'

const meta = {
  title: 'Utilities/Transition',
  component: Transition,
  tags: ['autodocs'],
  argTypes: {
    in: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['fade', 'collapse', 'zoom', 'slide', 'grow'],
    },
    timeout: {
      control: { type: 'number', min: 0, max: 2000, step: 50 },
    },
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right'],
    },
    transformOrigin: {
      control: 'text',
    },
    unmountOnExit: {
      control: 'boolean',
    },
    mountOnEnter: {
      control: 'boolean',
    },
    children: {
      table: { disable: true },
    },
    onEnter: {
      table: { disable: true },
    },
    onEntered: {
      table: { disable: true },
    },
    onExit: {
      table: { disable: true },
    },
    onExited: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Transition>

export default meta
type Story = StoryObj<typeof meta>

const DemoCard = () => (
  <Card variant="outlined" className="max-w-xs">
    <Card.Content>
      <Stack gap={1}>
        <Typography variant="subtitle2">Transition Demo</Typography>
        <Typography variant="body2" color="secondary">
          This card appears and disappears with a transition effect.
        </Typography>
      </Stack>
    </Card.Content>
  </Card>
)

export const Default: Story = {
  args: {
    in: true,
    type: 'fade',
    timeout: 200,
    direction: 'up',
    transformOrigin: 'center center',
    unmountOnExit: false,
    mountOnEnter: false,
    children: (<div><DemoCard /></div>) as React.ReactElement,
  },
  render: (args) => (
    <Transition {...args}>
      <div>
        <DemoCard />
      </div>
    </Transition>
  ),
}

const TransitionDemo = ({
  type,
  direction,
  transformOrigin,
}: {
  type: 'fade' | 'collapse' | 'zoom' | 'slide' | 'grow'
  direction?: 'up' | 'down' | 'left' | 'right'
  transformOrigin?: string
}) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <Stack gap={2}>
      <Stack direction="horizontal">
        {/* TODO: Switch 컴포넌트로 교체 */}
        <Button size="sm" variant="outline" onClick={() => setShow((prev) => !prev)}>
          Toggle
        </Button>
      </Stack>
      <div className="h-28">
        <Transition
          in={show}
          type={type}
          direction={direction}
          transformOrigin={transformOrigin}
        >
          <div>
            <DemoCard />
          </div>
        </Transition>
      </div>
    </Stack>
  )
}

export const AllTypes: Story = {
  args: {
    in: true,
    children: (<div><DemoCard /></div>) as React.ReactElement,
  },
  render: () => (
    <Grid columns={3} gap={6}>
      <Stack gap={1}>
        <Typography variant="subtitle2">Fade</Typography>
        <TransitionDemo type="fade" />
      </Stack>
      <Stack gap={1}>
        <Typography variant="subtitle2">Collapse</Typography>
        <TransitionDemo type="collapse" />
      </Stack>
      <Stack gap={1}>
        <Typography variant="subtitle2">Zoom</Typography>
        <TransitionDemo type="zoom" />
      </Stack>
      <Stack gap={1}>
        <Typography variant="subtitle2">Slide (up)</Typography>
        <TransitionDemo type="slide" direction="up" />
      </Stack>
      <Stack gap={1}>
        <Typography variant="subtitle2">Grow (top left)</Typography>
        <TransitionDemo type="grow" transformOrigin="top left" />
      </Stack>
    </Grid>
  ),
}
