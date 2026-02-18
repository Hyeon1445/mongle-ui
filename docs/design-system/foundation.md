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

- **rounded-lg (16px):** 추천 ⭐
- rounded-xl (20px): 큰 카드
- rounded-full: 원형

## Shadows

- **shadow-soft:** 카드 추천 ⭐
- shadow-cozy: 큰 카드

## Usage

```tsx
// Button
<button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg shadow-sm font-semibold">

// Card
<div className="bg-white p-6 rounded-lg shadow-soft">

// Tag
<span className="bg-secondary-50 text-secondary-700 px-3 py-1 rounded-full text-sm">
```

모든 토큰은 `tailwind.config.js` 참고
