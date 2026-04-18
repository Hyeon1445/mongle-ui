mongle-ui Figma 컴포넌트를 생성하는 커맨드입니다.

컴포넌트 이름: $ARGUMENTS

---

## 목적과 배경

이 커맨드는 **개발 완료된 코드베이스를 Figma로 옮기는 작업**을 자동화합니다.

- **배경**: 개발이 먼저 완성된 상태이고, 디자이너가 Figma에서 리터치해야 하는 상황
- **목표**: 디자이너가 처음부터 다시 그리는 비효율을 없애고, 코드베이스의 컴포넌트를 Figma에 그대로 재현
- **사용자**: 디자이너 — 따라서 모든 결과물은 **디자이너 표준 및 Figma 베스트 프랙티스**를 따름
  - Component Set: variant/size/state를 Variant 속성으로, 색상은 인스턴스 오버라이드 (Material Design 3, Atlassian, Shopify Polaris 방식)
  - Design Token: 모든 색상은 Variables에 바인딩하여 토큰 변경 시 자동 반영
  - Naming: 코드의 TypeScript 타입과 동일하게 유지하여 개발-디자인 간 핸드오프 명확화

---

## Figma 파일 정보
- 파일 키: `aJyKwOo2FVLSHnyIrmvZNh`
- Font: `LINE Seed Sans KR` (로컬 설치 완료)
  - 텍스트 노드는 `figma.loadFontAsync({ family: 'LINE Seed Sans KR', style: '...' })` 사용
  - 가능하면 로컬 Text Styles (`Heading/H1`, `Body/MD` 등) 바인딩 우선

---

## 공통 규칙

1. **디자인 토큰 필수**
   - 모든 fill/stroke/text 색상은 `figma.variables.getLocalVariables('COLOR')`로 조회한 Variable에 `figma.variables.setBoundVariableForPaint()`로 바인딩
   - 하드코딩된 hex 색상 사용 금지

2. **네이밍은 코드와 일치**
   - Component 이름, variant/size/state 값은 `src/components/`의 TypeScript 타입과 동일하게 사용
   - 예: `variant=solid`, `size=md`, `state=disabled`

3. **페이지 구조**: `{Category}/{ComponentName}` 형식
   | 컴포넌트 | 카테고리 |
   |---------|----------|
   | Button, IconButton, Typography | General |
   | Badge, Spinner, Skeleton, Alert, Toast | Feedback |
   | TextField, PasswordField, NumberField, Select, Checkbox, Textarea | Form |
   | Card, Paper, Divider, Stack, Grid, Container | Layout |
   | Avatar, AvatarGroup | Data Display |
   | Modal, Drawer, Tooltip, Popover | Overlay |
   | Tabs, Breadcrumb, Link | Navigation |

4. **Component Set 구조 (Figma 베스트 프랙티스)**
   - Variant 속성: `variant × size × state` (색상 제외)
   - 색상은 primary 기본값, 디자이너가 인스턴스에서 오버라이드
   - 3컬럼 레이아웃: sm/md/lg 고정 너비, variant+state 행으로 wrap

5. **Showcase 구조 (Storybook stories 참고)**
   - 각 Story = 하나의 섹션
   - 기본 순서: Variants → Sizes → Colors → States (disabled 등) → Composition

---

## 추천 모드 ($ARGUMENTS 없음)

1. `mcp__figma__use_figma`로 현재 파일의 페이지 목록 조회
2. 완성된 컴포넌트와 남은 컴포넌트를 파악하여 다음 작업 추천
3. 추천 우선순위 (기본값):
   ```
   Avatar → Spinner → Skeleton → Typography → IconButton
   → TextField → Card → Divider → Paper → AvatarGroup
   ```
4. 추천 이유를 간략히 설명하고 사용자 확인 후 작업 시작

---

## 컴포넌트 생성 모드 ($ARGUMENTS 있음)

### 1단계: 코드 분석
- `src/components/` 에서 `{Component}.tsx` 와 `{Component}.stories.tsx` 읽기
- Props 인터페이스, variant/size/color/state 옵션 파악
- Storybook stories 구조로 Showcase 섹션 계획

### 2단계: Variables & Text Styles 조회
색상 Variable과 Text Style을 모두 조회하고, 모든 텍스트/색상에 반드시 바인딩한다.

```js
// 색상 Variables
const allVars = figma.variables.getLocalVariables('COLOR');
function getVar(name) { return allVars.find(v => v.name === name); }
function boundPaint(varName) {
  const v = getVar(varName);
  if (!v) return null;
  return figma.variables.setBoundVariableForPaint(
    { type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }, 'color', v
  );
}

// Text Styles — 텍스트 노드 생성 시 textStyleId 바인딩 필수
const textStyles = figma.getLocalTextStyles();
function findTextStyle(fontSize, fontStyle) {
  const isBold = fontStyle === 'Bold' || fontStyle === 'Medium' || fontStyle === 'SemiBold';
  const weight = isBold ? 'Bold' : 'Regular';
  return textStyles.find(s => s.fontSize === fontSize && s.fontName.style === weight)
    || textStyles.find(s => s.fontSize === fontSize)
    || textStyles.filter(s => s.fontName.style === weight)
        .sort((a,b) => Math.abs(a.fontSize-fontSize) - Math.abs(b.fontSize-fontSize))[0]
    || textStyles[0];
}

// 텍스트 노드 생성 예시
async function makeText(characters, fontSize, fontStyle) {
  // 로컬 폰트 로드 불가 — Text Style로 폰트 적용
  const style = findTextStyle(fontSize, fontStyle);
  await figma.loadFontAsync(style.fontName); // Text Style 폰트는 로드 가능
  const t = figma.createText();
  t.textStyleId = style.id; // 먼저 스타일 적용 (폰트 패밀리 설정)
  t.fontSize = fontSize;    // 필요시 크기 오버라이드
  t.characters = characters;
  t.textAutoResize = 'WIDTH_AND_HEIGHT';
  return t;
}
```

### 3단계: Figma 페이지 생성
```js
let page = figma.root.children.find(p => p.name === '{Category}/{ComponentName}');
if (!page) { page = figma.createPage(); page.name = '{Category}/{ComponentName}'; }
await figma.setCurrentPageAsync(page);
page.children.slice().forEach(n => n.remove());
```

### 4단계: Showcase 생성
- x=80, y=80 위치
- 각 섹션: 제목 레이블 + 콘텐츠 행
- 모든 색상 Variable 바인딩

### 5단계: Component Set 생성
- `figma.createComponent()` → `figma.combineAsVariants()`
- `layoutMode = 'NONE'` 후 수동 grid 포지셔닝
- 컬럼 너비를 실제 컴포넌트 너비 기준으로 계산하여 정렬

### 6단계: 배치
- Component Set: Showcase 우측 80px 간격
- `figma.viewport.scrollAndZoomIntoView([showcase, cs])`

---

## 작업 완료 후

작업 결과를 사용자에게 보여주고 확인을 요청한다.

확인되면:

1. `mcp__figma__use_figma`로 현재 파일 버전 히스토리 조회하여 최신 버전 번호 파악:
```js
// 버전 히스토리는 REST API 필요 — 대신 사용자에게 현재 최신 버전 확인 요청
```

2. 다음 형식으로 버전 히스토리 저장 정보 제공:

**Title**: `v{X}.{Y}.0 - feat: {ComponentName} component`
- 새 컴포넌트 추가: minor(Y) +1

**Description**:
```
- {ComponentName} Showcase: {섹션 목록}
- {ComponentName} Component Set: {N}개 variants ({property 나열})
- Colors as instance override
```

**저장 방법**: Figma 햄버거 메뉴 → File → Save to version history
