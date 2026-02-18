# Coding Conventions

## TypeScript

```typescript
// Props
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

// Component
export const Button = memo<ButtonProps>(({ variant = 'primary' }) => {
  return <button className={clsx('...')}>...</button>
})

Button.displayName = 'Button'
```

## Styling

```tsx
// ✅ Tailwind only
<div className="bg-primary-500 p-4 rounded-lg" />

// ❌ No inline styles
<div style={{ background: '#FF8B6D' }} />
```

## Testing

```typescript
describe('Button', () => {
  it('renders', () => {
    render(<Button>Click</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

## File Structure

```
/ComponentName
├─ ComponentName.tsx
├─ ComponentName.stories.tsx
├─ ComponentName.test.tsx
└─ index.ts
```
