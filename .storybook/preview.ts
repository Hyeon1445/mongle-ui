import type { Preview } from "@storybook/react";
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F5F5F4' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#1C1917' },
      ],
    },
  },
};

export default preview;
