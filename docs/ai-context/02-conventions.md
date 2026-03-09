# Coding Conventions

## Component API

### Size

`sm` | `md` | `lg` (기본값: `md`)

| 토큰 | sm | md | lg |
|---|---|---|---|
| padding | `px-3 py-1.5` | `px-4 py-2` | `px-6 py-3` |
| font | `text-sm` | `text-base` | `text-lg` |
| height | `h-8` (32px) | `h-10` (40px) | `h-12` (48px) |
| gap | `gap-1.5` | `gap-2` | `gap-2.5` |
| icon | `w-4 h-4` (16px) | `w-5 h-5` (20px) | `w-6 h-6` (24px) |

### Variant

`solid` | `outline` | `ghost` | `soft` (기본값: `solid`)

- **solid:** 채워진 배경
- **outline:** 테두리만
- **ghost:** 배경 없음, hover시 연하게
- **soft:** 연한 배경 (몽글몽글 감성)

### Color

`primary` | `secondary` | `success` | `error` | `warning` | `info` (기본값: `primary`)

### Variant + Color 매핑

`{color}`는 color prop 값으로 치환:

| Variant | 기본 | hover | active |
|---|---|---|---|
| solid | `bg-{color}-500 text-white` | `bg-{color}-600` | `bg-{color}-700` |
| outline | `border border-{color}-500 text-{color}-600` | `bg-{color}-50` | `bg-{color}-100` |
| ghost | `text-{color}-600` | `bg-{color}-50` | `bg-{color}-100` |
| soft | `bg-{color}-50 text-{color}-700` | `bg-{color}-100` | `bg-{color}-200` |

### Composition 패턴

**Hybrid** — 단순 컴포넌트는 Flat Props, 복잡한 컴포넌트는 Compound Component

```tsx
// 단순 컴포넌트 → Flat Props
<Button size="md" variant="solid">Click</Button>
<Badge variant="soft" color="primary">New</Badge>

// 복잡한 컴포넌트 → Compound Component
<Select>
  <Select.Trigger>선택</Select.Trigger>
  <Select.Content>
    <Select.Option value="1">옵션 1</Select.Option>
  </Select.Content>
</Select>
```

### Props 네이밍

HTML 네이티브 속성명 사용:

```tsx
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'solid' | 'outline' | 'ghost' | 'soft'
  size?: 'sm' | 'md' | 'lg'
  // disabled (O) / isDisabled (X)
  // className (O) / sx (X)
}
```

### Ref Forwarding

ref가 필요한 컴포넌트에만 적용 (Button, Input, Textarea 등):

```tsx
// React 19 — forwardRef 불필요, ref를 일반 prop으로 받음
interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'solid' | 'outline' | 'ghost' | 'soft'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.memo(
  ({ ref, variant = 'solid', size = 'md', ...props }: ButtonProps) => {
    return <button ref={ref} {...props} />
  }
)
```

ref가 필요 없는 컴포넌트는 `ComponentPropsWithoutRef` 사용.

## File Structure

1컴포넌트 = 1파일. Props interface도 같은 파일에 정의.

```
src/
├── components/
│   ├── button/
│   │   ├── Button.tsx           # 컴포넌트 + Props interface
│   │   ├── Button.test.tsx      # 테스트
│   │   ├── Button.stories.tsx   # 스토리북
│   │   └── index.ts             # 배럴 export
│   ├── card/
│   │   └── ...
│   └── index.ts                 # 전체 export
├── lib/
│   └── classNames.ts             # className 유틸 (clsx + tailwind-merge)
└── types/
    └── index.ts                 # 공통 타입 (Size, Variant, Color)
```

## Export

Named export만 사용:

```tsx
// button/Button.tsx
export const Button = React.memo(({ ...props }: ButtonProps) => { ... })

// button/index.ts
export { Button } from './Button'
export type { ButtonProps } from './Button'

// src/components/index.ts
export { Button } from './button'
```

## Interaction States

### Transition

기본: `transition-all duration-150 ease-out`
모달/드로우어: `transition-all duration-300 ease-out`

### Hover

- 약간 커지는 효과: `hover:scale-[1.02]`
- 배경색 변화: Variant + Color 매핑 테이블 참고

### Active (클릭/탭)

- 눌리는 효과: `active:scale-[0.97]`

### Focus

**Button**: Ring offset 스타일

```
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-primary-500
focus-visible:ring-offset-2
```

**Input**: Soft glow 스타일 (border + 빛 번짐)

```
focus:border-primary-500
focus:shadow-[0_0_0_3px_rgba(255,139,109,0.2)]
focus:outline-none
```

### Disabled

```
disabled:opacity-50
disabled:cursor-not-allowed
disabled:pointer-events-none
```

## Animation

**Smooth & Bouncy** — 부드러운 전환 + 약간의 bounce 효과

- `bounceIn`: 등장 시 살짝 커졌다 돌아오는 효과
- `fadeIn`: 아래에서 위로 페이드인

상세 keyframes는 `tailwind.config.js` 참고.

## Accessibility

- 모든 인터랙티브 컴포넌트에 ARIA 속성 필수
- 키보드 네비게이션 지원 (Tab, Enter, Space, Escape)
- `focus-visible`로 키보드 포커스만 표시 (마우스 클릭 시 링 안 보임)
- color contrast: WCAG 2.1 AA 기준 (4.5:1)

## Dark Mode

현재 라이트 모드 전용. 나중에 지원할 수 있도록 color token 구조 유지.

## Code Style

### 컴포넌트 선언

arrow function + props destructuring:

```tsx
// Button.tsx — 1파일에 interface + 컴포넌트
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'solid' | 'outline' | 'ghost' | 'soft'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.memo(
  ({ variant = 'solid', size = 'md', children, ...rest }: ButtonProps) => {
    return <button {...rest}>{children}</button>
  }
)
```

### Import 순서

그룹 사이 빈 줄로 구분:

```tsx
// 1. React
import React from 'react'

// 2. 외부 라이브러리
import { clsx } from 'clsx'

// 3. 내부 모듈
import { useTheme } from '@/hooks/useTheme'
import { Card } from '../Card'

// 4. 타입
import type { ButtonProps } from './Button'
```

### Tailwind 클래스 정렬

`prettier-plugin-tailwindcss`로 자동 정렬 (`.prettierrc`에 설정됨).

### 네이밍

- **폴더명:** kebab-case (`button/`, `card-header/`)
- **파일명:** PascalCase (`Button.tsx`, `CardHeader.tsx`)
- **컴포넌트:** PascalCase (`Button`, `CardHeader`)
- **Props 타입:** `[Component]Props` (`ButtonProps`, `CardHeaderProps`)
- **훅:** camelCase with `use` prefix (`useToggle`, `useTheme`)
- **유틸 함수:** camelCase (`formatDate`, `mergeClasses`)
- **상수:** UPPER_SNAKE_CASE (`DEFAULT_SIZE`, `VARIANT_MAP`)

## Utilities

### classNames (className 병합)

`clsx` + `tailwind-merge` 조합. `src/lib/classNames.ts`에 정의:

```tsx
import { classNames } from '@/lib/classNames'

// 조건부 클래스
classNames('px-4 py-2', disabled && 'opacity-50')

// 사용자 className으로 내부 스타일 덮어쓰기 가능
classNames('bg-primary-500 px-4', className) // className에 bg-red-500 넘기면 primary가 대체됨
```

### 공통 타입

`src/types/index.ts`에 정의:

```tsx
export type Size = 'sm' | 'md' | 'lg'
export type Variant = 'solid' | 'outline' | 'ghost' | 'soft'
export type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
```

컴포넌트에서 import해서 사용:

```tsx
import type { Size, Variant, Color } from '@/types'
```

## TypeScript

- strict 모드
- `any` 금지
- 컴포넌트 Props는 `interface`로 정의하고 `[Component]Props`로 네이밍
- HTML 속성 확장 시 `React.ComponentPropsWithRef` 또는 `React.ComponentPropsWithoutRef` 사용

## Test

- 테스트 파일: `[Component].test.tsx`
- `@testing-library/react` + `vitest` 사용
- 테스트 유틸: `src/test/utils.tsx`의 `renderWithProviders` 사용
- 테스트 구조: `describe` > `it`으로 그룹핑

```tsx
describe('Button', () => {
  it('renders children', () => { ... })
  it('applies variant classes', () => { ... })
  it('handles click events', () => { ... })
  it('is disabled when disabled prop is true', () => { ... })
})
```

## Storybook

- 스토리 파일: `[Component].stories.tsx`
- CSF 3.0 형식 사용
- 기본 스토리 + variant/size 조합 스토리
- **코드는 flat, 카테고리는 Storybook `title`로만 분류**

### 카테고리

| 카테고리 | 컴포넌트 예시 |
|---|---|
| `General` | Button, Typography, Icon |
| `Form` | Input, Select, Checkbox, Textarea |
| `Layout` | Card, Container, Stack, Grid, Divider |
| `Feedback` | Alert, Toast, Badge, Spinner |
| `Overlay` | Modal, Drawer, Tooltip, Popover |
| `Navigation` | Tabs, Breadcrumb, Link |

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'General/Button',   // 카테고리/컴포넌트명
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}
```

### Stories 작성 규칙

- **라이브러리 내 기존 컴포넌트를 반드시 활용할 것** — raw HTML 태그 대신 라이브러리 컴포넌트 사용
  - `<span>`, `<p>` 텍스트 → `Typography` 컴포넌트 사용
  - `<button>` → `Button` 컴포넌트 사용
  - 레이아웃 → `Stack`, `Grid`, `Divider` 컴포넌트 사용
- 조합 예시(CompositionExample)에서는 다양한 기존 컴포넌트를 조합하여 실제 사용 사례를 보여줄 것
