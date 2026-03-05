import type { Preview } from "@storybook/react-vite";
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
      options: {
        light: { name: 'light', value: '#F5F5F4' },
        white: { name: 'white', value: '#FFFFFF' },
        dark: { name: 'dark', value: '#1C1917' }
      }
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
};

export default preview;
