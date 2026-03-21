import type { Preview } from "@storybook/react-vite";
import '../src/index.css';

const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://cdn.jsdelivr.net/npm/@kfonts/line-seed-sans-kr/dist/index.min.css';
document.head.appendChild(fontLink);

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'Theme', 'General', 'Form', 'Layout', 'Feedback', 'Overlay', 'Navigation', 'Utilities'],
      },
    },
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
