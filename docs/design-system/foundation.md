# Design Foundation

## Color System

### Primary - Coral (#FF8B6D)

따뜻하고 친근한 브랜드 컬러

### Secondary - Periwinkle (#818CF8)

몽환적이고 감성적인 보조 컬러

### Success - Mint (#14B8A6)

상쾌하고 성취감 있는 성공 컬러

## Typography

**Font:** Pretendard Variable  
**Scale:** 12px ~ 48px (9단계)  
**Weights:** 400, 500, 600, 700

## Spacing

4px 기반 시스템

- spacing-4 (16px): 기본
- spacing-6 (24px): 카드

## Border Radius

- **rounded-md (8px):** 버튼, 인풋, 알림 등 기본 요소 ⭐
- rounded-lg (12px): 카드
- rounded-xl (16px): 큰 카드, 모달
- rounded-full: 뱃지, 태그, 원형

## Shadows

- **shadow-soft:** 카드 추천 ⭐
- shadow-cozy: 큰 카드

## Animation

**스타일:** Smooth & Bouncy (부드러운 전환 + 살짝 bounce)

### Transition

- `transition-DEFAULT` (150ms ease-out): 기본 인터랙션
- `transition-slow` (300ms ease-out): 모달, 드로우어

### Keyframes

- **bounceIn:** 살짝 커졌다 돌아오며 등장 (scale 0.95 → 1.02 → 1)
- **fadeIn:** 아래에서 위로 페이드인 (translateY 4px → 0)

### Hover 패턴

- `hover:scale-[1.02]` + transition으로 몽글몽글한 반응감

## Usage

```tsx
// Button
<button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md shadow-sm font-semibold">

// Card
<div className="bg-white p-6 rounded-lg shadow-soft">

// Tag
<span className="bg-secondary-50 text-secondary-700 px-3 py-1 rounded-full text-sm">
```

모든 토큰은 `tailwind.config.js` 참고
