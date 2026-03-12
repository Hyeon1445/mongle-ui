import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/components/card'
import { Stack } from '@/components/stack'
import { Typography } from '@/components/typography'

import { Portal } from './Portal'

const meta = {
  title: 'Utilities/Portal',
  component: Portal,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    container: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Portal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Card variant="outlined">
      <Card.Content>
        <Stack gap={2}>
          <Typography variant="subtitle2">Parent Card</Typography>
          <Typography variant="body2" color="secondary">
            Portal children are rendered into document.body, not inside this
            card.
          </Typography>
          <Portal {...args}>
            <div
              style={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                zIndex: 50,
              }}
            >
              <Card variant="elevated" className="bg-primary-50 border border-primary-200">
                <Card.Content>
                  <Typography variant="body2" color="primary">
                    Rendered via Portal
                  </Typography>
                </Card.Content>
              </Card>
            </div>
          </Portal>
        </Stack>
      </Card.Content>
    </Card>
  ),
}
