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
        light: { name: 'light', value: '#FAFAF9' },
        white: { name: 'white', value: '#FFFFFF' },
        dark: { name: 'dark', value: '#1C1917' }
      }
    },
  },
};

export default preview;
