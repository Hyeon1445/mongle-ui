# Mongle UI 🌸

> A cozy and warm React component library

**Mongle** (몽글몽글) - Korean word describing something soft, fluffy, and cloud-like.

---

## Installation

```bash
pnpm add mongle-ui
```

## Usage

```tsx
import { Button } from 'mongle-ui'
import 'mongle-ui/styles.css'

function App() {
  return <Button variant="primary">Hello Mongle!</Button>
}
```

---

## Components

| Category     | Components                                                         |
| ------------ | ------------------------------------------------------------------ |
| General      | Button, Icon, IconButton, Typography                               |
| Layout       | Card, Divider, Grid, Paper, Stack                                  |
| Feedback     | Badge, Spinner                                                     |
| Data Display | Avatar, AvatarGroup                                                |
| Form         | TextField, PasswordField, NumberField                              |
| Utilities    | FocusTrap, Portal, Transition, VisuallyHidden                      |

---

## Design Philosophy

- **🌸 Fluffy & Soft** - Large border-radius, gentle shadows
- **❤️ Warm & Cozy** - Coral and Periwinkle color palette
- **🎯 Clean & Simple** - Minimal but functional
- **♿ Accessible** - WCAG compliant

---

## Core Colors

- **Primary (Coral):** `#FF8B6D` - Warm and friendly
- **Secondary (Periwinkle):** `#818CF8` - Dreamy and emotional
- **Success (Mint):** `#14B8A6` - Fresh and accomplished

---

## Tech Stack

- React 18/19 + TypeScript
- TailwindCSS
- lucide-react (bundled)
- Tree Shaking supported

---

## Development

```bash
pnpm install
pnpm dev              # Dev server
pnpm storybook        # Storybook
pnpm build-storybook  # Build Storybook
pnpm test             # Vitest
pnpm test:ui          # Vitest UI
pnpm lint             # ESLint
pnpm format           # Prettier
```

---

## License

MIT
