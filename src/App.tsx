function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary-500">
            Mongle UI Preview
          </h1>
          <p className="text-gray-500">
            컨벤션 기반 컴포넌트 미리보기
          </p>
        </div>

        {/* ========== 개별 컴포넌트 ========== */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-700">
            Individual Components
          </span>
        </div>

        {/* Button - Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Button - Variants</h2>
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-600 active:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">
              Solid
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md border border-primary-500 px-4 py-2 text-base font-semibold text-primary-600 transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-50 active:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">
              Outline
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md px-4 py-2 text-base font-semibold text-primary-600 transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-50 active:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">
              Ghost
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-primary-50 px-4 py-2 text-base font-semibold text-primary-700 transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-100 active:bg-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">
              Soft
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50" disabled>
              Disabled
            </button>
          </div>
        </section>

        {/* Button - Sizes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Button - Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-600">
              Small
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-600">
              Medium
            </button>
            <button className="inline-flex h-12 items-center gap-2.5 rounded-md bg-primary-500 px-6 py-3 text-lg font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-600">
              Large
            </button>
          </div>
        </section>

        {/* Button - Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Button - Colors</h2>
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-600">
              Primary
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-secondary-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-secondary-600">
              Secondary
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-success-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-success-600">
              Success
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-error-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-error-600">
              Error
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-warning-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-warning-600">
              Warning
            </button>
          </div>

          <h3 className="text-lg font-semibold text-gray-700">Soft Variants</h3>
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-primary-50 px-4 py-2 text-base font-semibold text-primary-700 transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-100">
              Primary
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-secondary-50 px-4 py-2 text-base font-semibold text-secondary-700 transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-secondary-100">
              Secondary
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-success-50 px-4 py-2 text-base font-semibold text-success-700 transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-success-100">
              Success
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-error-50 px-4 py-2 text-base font-semibold text-error-700 transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-error-100">
              Error
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-warning-50 px-4 py-2 text-base font-semibold text-warning-700 transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-warning-100">
              Warning
            </button>
          </div>
        </section>

        {/* Badge */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Badge</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-primary-500 px-2.5 py-0.5 text-xs font-semibold text-white">
              Solid
            </span>
            <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
              Soft
            </span>
            <span className="inline-flex items-center rounded-full border border-primary-500 px-2.5 py-0.5 text-xs font-semibold text-primary-600">
              Outline
            </span>
            <span className="inline-flex items-center rounded-full bg-secondary-50 px-2.5 py-0.5 text-xs font-semibold text-secondary-700">
              Secondary
            </span>
            <span className="inline-flex items-center rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-semibold text-success-700">
              Success
            </span>
            <span className="inline-flex items-center rounded-full bg-error-50 px-2.5 py-0.5 text-xs font-semibold text-error-700">
              Error
            </span>
            <span className="inline-flex items-center rounded-full bg-warning-50 px-2.5 py-0.5 text-xs font-semibold text-warning-700">
              Warning
            </span>
          </div>
        </section>

        {/* Input & Textarea */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Input & Textarea</h2>
          <div className="max-w-sm space-y-3">
            <input
              type="text"
              placeholder="Default input"
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 transition-all placeholder:text-gray-400 hover:border-primary-400 focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(255,139,109,0.2)] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Small input"
              className="h-8 w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-900 transition-all placeholder:text-gray-400 hover:border-primary-400 focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(255,139,109,0.2)] focus:outline-none"
            />
            <textarea
              placeholder="Textarea - 여러 줄 입력"
              rows={3}
              className="w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 transition-all placeholder:text-gray-400 hover:border-primary-400 focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(255,139,109,0.2)] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Disabled input"
              disabled
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 transition-all placeholder:text-gray-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </section>

        {/* Checkbox & Toggle */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Checkbox & Toggle</h2>
          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <label className="inline-flex cursor-pointer items-center gap-2.5">
                <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-gray-300 text-primary-500 accent-primary-500" />
                <span className="text-base text-gray-900">체크됨</span>
              </label>
              <label className="inline-flex cursor-pointer items-center gap-2.5">
                <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-primary-500 accent-primary-500" />
                <span className="text-base text-gray-900">체크 안 됨</span>
              </label>
              <label className="inline-flex cursor-pointer items-center gap-2.5 opacity-50">
                <input type="checkbox" disabled className="h-5 w-5 rounded border-gray-300" />
                <span className="text-base text-gray-900">비활성화</span>
              </label>
            </div>

            <h3 className="text-lg font-semibold text-gray-700">Toggle</h3>
            <div className="flex flex-col gap-3">
              {/* On */}
              <label className="inline-flex cursor-pointer items-center gap-3">
                <div className="relative h-6 w-11 rounded-full bg-primary-500 transition-all">
                  <div className="absolute left-[22px] top-[2px] h-5 w-5 rounded-full bg-white shadow-sm transition-all" />
                </div>
                <span className="text-base text-gray-900">활성화</span>
              </label>
              {/* Off */}
              <label className="inline-flex cursor-pointer items-center gap-3">
                <div className="relative h-6 w-11 rounded-full bg-gray-300 transition-all">
                  <div className="absolute left-[2px] top-[2px] h-5 w-5 rounded-full bg-white shadow-sm transition-all" />
                </div>
                <span className="text-base text-gray-900">비활성화</span>
              </label>
            </div>
          </div>
        </section>

        {/* Avatar */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Avatar</h2>
          <div className="flex items-center gap-4">
            {/* sm */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
              S
            </div>
            {/* md */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 text-base font-semibold text-secondary-700">
              M
            </div>
            {/* lg */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-100 text-lg font-semibold text-success-700">
              L
            </div>
            {/* xl */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-xl font-bold text-white">
              XL
            </div>
            {/* group */}
            <div className="flex -space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-primary-100 text-sm font-semibold text-primary-700">A</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-secondary-100 text-sm font-semibold text-secondary-700">B</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-success-100 text-sm font-semibold text-success-700">C</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-sm font-semibold text-gray-600">+2</div>
            </div>
          </div>
        </section>

        {/* Spinner */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Spinner</h2>
          <div className="flex items-center gap-6">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-200 border-t-primary-500" />
            <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-primary-200 border-t-primary-500" />
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-secondary-200 border-t-secondary-500" />
          </div>
        </section>

        {/* Divider */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Divider</h2>
          <div className="space-y-4">
            <hr className="border-gray-200" />
            <div className="flex items-center gap-4">
              <hr className="flex-1 border-gray-200" />
              <span className="text-sm text-gray-400">또는</span>
              <hr className="flex-1 border-gray-200" />
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Tabs</h2>
          <div className="border-b border-gray-200">
            <div className="flex gap-0">
              <button className="-mb-px border-b-2 border-primary-500 px-4 py-2.5 text-sm font-semibold text-primary-600 transition-all">
                Overview
              </button>
              <button className="-mb-px border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-gray-500 transition-all hover:border-gray-300 hover:text-gray-700">
                Components
              </button>
              <button className="-mb-px border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-gray-500 transition-all hover:border-gray-300 hover:text-gray-700">
                Tokens
              </button>
              <button className="-mb-px cursor-not-allowed border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-gray-300">
                Settings
              </button>
            </div>
          </div>
        </section>

        {/* Tooltip */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Tooltip</h2>
          <div className="flex items-center gap-6">
            <div className="relative inline-block">
              <button className="inline-flex h-10 items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-base font-medium text-gray-700 transition-all hover:bg-gray-200">
                Hover me
              </button>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-gray-800 px-3 py-1.5 text-xs text-white shadow-md">
                Tooltip text
                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-800" />
              </div>
            </div>
          </div>
        </section>

        {/* Progress */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Progress</h2>
          <div className="space-y-3">
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-gray-600">업로드 중...</span>
                <span className="font-medium text-primary-600">72%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[72%] rounded-full bg-primary-500 transition-all" />
              </div>
            </div>
            <div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-full rounded-full bg-success-500 transition-all" />
              </div>
              <p className="mt-1 text-sm text-success-600">완료!</p>
            </div>
            <div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[35%] rounded-full bg-secondary-500 transition-all" />
              </div>
            </div>
          </div>
        </section>

        {/* Alert */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Alert</h2>
          <div className="space-y-3">
            <div className="rounded-md bg-success-50 p-4 text-success-700">
              <p className="font-semibold">Success</p>
              <p className="text-sm">작업이 성공적으로 완료되었습니다.</p>
            </div>
            <div className="rounded-md bg-error-50 p-4 text-error-700">
              <p className="font-semibold">Error</p>
              <p className="text-sm">문제가 발생했습니다. 다시 시도해주세요.</p>
            </div>
            <div className="rounded-md bg-warning-50 p-4 text-warning-700">
              <p className="font-semibold">Warning</p>
              <p className="text-sm">이 작업은 되돌릴 수 없습니다.</p>
            </div>
            <div className="rounded-md bg-info-50 p-4 text-info-700">
              <p className="font-semibold">Info</p>
              <p className="text-sm">새로운 업데이트가 있습니다.</p>
            </div>
          </div>
        </section>

        {/* Card */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Card</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-soft">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Basic Card
              </h3>
              <p className="mb-4 text-gray-600">
                shadow-soft를 사용한 기본 카드. 몽글몽글한 느낌의 부드러운 그림자.
              </p>
              <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-600">
                Action
              </button>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-cozy">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Cozy Card
              </h3>
              <p className="mb-4 text-gray-600">
                shadow-cozy와 rounded-xl로 더 아늑한 느낌의 카드.
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                  React
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary-50 px-2.5 py-0.5 text-xs font-semibold text-secondary-700">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 조립된 컴포넌트 ========== */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
            Composed Examples
          </span>
        </div>

        {/* 로그인 폼 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Login Form</h2>
          <div className="mx-auto max-w-sm rounded-lg bg-white p-8 shadow-soft">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <span className="text-xl font-bold text-primary-600">M</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">로그인</h3>
              <p className="mt-1 text-sm text-gray-500">Mongle에 오신 것을 환영합니다</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">이메일</label>
                <input
                  type="email"
                  placeholder="hello@mongle.com"
                  className="h-10 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 transition-all placeholder:text-gray-400 hover:border-primary-400 focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(255,139,109,0.2)] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">비밀번호</label>
                <input
                  type="password"
                  placeholder="********"
                  className="h-10 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 transition-all placeholder:text-gray-400 hover:border-primary-400 focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(255,139,109,0.2)] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex cursor-pointer items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-primary-500" />
                  <span className="text-sm text-gray-600">로그인 유지</span>
                </label>
                <button className="text-sm font-medium text-primary-600 transition-all hover:text-primary-700">
                  비밀번호 찾기
                </button>
              </div>

              <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-600">
                로그인
              </button>

              <div className="flex items-center gap-4">
                <hr className="flex-1 border-gray-200" />
                <span className="text-sm text-gray-400">또는</span>
                <hr className="flex-1 border-gray-200" />
              </div>

              <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-base font-medium text-gray-700 transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-gray-50">
                Google로 계속하기
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              계정이 없으신가요?{' '}
              <button className="font-medium text-primary-600 transition-all hover:text-primary-700">회원가입</button>
            </p>
          </div>
        </section>

        {/* 프로필 카드 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Profile Card</h2>
          <div className="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-cozy">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-2xl font-bold text-white">
                J
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-gray-900">현지</h3>
                  <span className="inline-flex items-center rounded-full bg-success-50 px-2 py-0.5 text-xs font-semibold text-success-700">
                    Pro
                  </span>
                </div>
                <p className="text-sm text-gray-500">Frontend Developer</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              디자인 시스템을 만들고 있는 프론트엔드 개발자입니다.
              몽글몽글한 UI를 좋아합니다.
            </p>

            <div className="mt-4 flex gap-6 border-t border-gray-100 pt-4">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">12</p>
                <p className="text-xs text-gray-500">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">1.2k</p>
                <p className="text-xs text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">348</p>
                <p className="text-xs text-gray-500">Following</p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="inline-flex h-8 flex-1 items-center justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-600">
                Follow
              </button>
              <button className="inline-flex h-8 items-center justify-center rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-gray-50">
                Message
              </button>
            </div>
          </div>
        </section>

        {/* 알림 패널 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Notification Panel</h2>
          <div className="mx-auto max-w-md rounded-lg bg-white shadow-soft">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-900">알림</h3>
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-error-500 px-1.5 text-xs font-bold text-white">
                  3
                </span>
              </div>
              <button className="text-sm font-medium text-primary-600 transition-all hover:text-primary-700">
                모두 읽기
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {/* 읽지 않은 알림 */}
              <div className="flex gap-3 bg-primary-50/50 px-6 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-sm font-semibold text-secondary-700">
                  K
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">김민수</span>님이 댓글을 남겼습니다.
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">2분 전</p>
                </div>
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
              </div>

              {/* 읽지 않은 알림 */}
              <div className="flex gap-3 bg-primary-50/50 px-6 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success-100 text-sm font-semibold text-success-700">
                  P
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">프로젝트</span>가 배포 완료되었습니다.
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">15분 전</p>
                </div>
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
              </div>

              {/* 읽은 알림 */}
              <div className="flex gap-3 px-6 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
                  L
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">이영희</span>님이 팔로우했습니다.
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">1시간 전</p>
                </div>
              </div>

              {/* 읽은 알림 */}
              <div className="flex gap-3 px-6 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-warning-100 text-sm font-semibold text-warning-700">
                  !
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    비밀번호 변경 후 <span className="font-semibold">30일</span>이 지났습니다.
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">어제</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 설정 패널 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Settings Panel</h2>
          <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-soft">
            <h3 className="mb-4 text-lg font-bold text-gray-900">환경설정</h3>

            <div className="space-y-0 divide-y divide-gray-100">
              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">알림 받기</p>
                  <p className="text-xs text-gray-500">이메일로 새 알림을 받습니다</p>
                </div>
                <div className="relative h-6 w-11 rounded-full bg-primary-500 transition-all">
                  <div className="absolute left-[22px] top-[2px] h-5 w-5 rounded-full bg-white shadow-sm transition-all" />
                </div>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">다크 모드</p>
                  <p className="text-xs text-gray-500">어두운 테마를 사용합니다</p>
                </div>
                <div className="relative h-6 w-11 rounded-full bg-gray-300 transition-all">
                  <div className="absolute left-[2px] top-[2px] h-5 w-5 rounded-full bg-white shadow-sm transition-all" />
                </div>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">자동 저장</p>
                  <p className="text-xs text-gray-500">변경사항을 자동으로 저장합니다</p>
                </div>
                <div className="relative h-6 w-11 rounded-full bg-primary-500 transition-all">
                  <div className="absolute left-[22px] top-[2px] h-5 w-5 rounded-full bg-white shadow-sm transition-all" />
                </div>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">언어</p>
                  <p className="text-xs text-gray-500">인터페이스 언어 설정</p>
                </div>
                <button className="inline-flex h-8 items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50">
                  한국어
                </button>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button className="inline-flex h-10 items-center gap-2 rounded-md px-4 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100">
                취소
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.97] hover:bg-primary-600">
                저장
              </button>
            </div>
          </div>
        </section>

        {/* 피드 카드 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Feed Card</h2>
          <div className="mx-auto max-w-md rounded-lg bg-white shadow-soft">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-500 text-base font-bold text-white">
                  D
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">디자인팀</p>
                  <p className="text-xs text-gray-500">3시간 전</p>
                </div>
                <button className="inline-flex h-8 items-center rounded-md px-2 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-600">
                  ...
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Mongle UI 디자인 시스템의 첫 번째 릴리즈가 완료되었습니다!
                따뜻하고 몽글몽글한 감성의 컴포넌트들을 사용해보세요.
              </p>

              <div className="mt-3 flex gap-2">
                <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                  Release
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary-50 px-2.5 py-0.5 text-xs font-semibold text-secondary-700">
                  Design System
                </span>
              </div>
            </div>

            <div className="flex border-t border-gray-100">
              <button className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-gray-500 transition-all hover:bg-gray-50 hover:text-primary-600">
                Like
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-gray-500 transition-all hover:bg-gray-50 hover:text-primary-600">
                Comment
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-gray-500 transition-all hover:bg-gray-50 hover:text-primary-600">
                Share
              </button>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Color Palette</h2>
          <div className="space-y-3">
            {/* Primary */}
            <div className="flex gap-1 overflow-hidden rounded-lg">
              <div className="flex h-12 flex-1 items-center justify-center bg-primary-50 text-xs text-primary-700">50</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-primary-100 text-xs text-primary-700">100</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-primary-200 text-xs text-primary-700">200</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-primary-300 text-xs text-primary-800">300</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-primary-400 text-xs text-white">400</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-primary-500 text-xs font-bold text-white">500</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-primary-600 text-xs text-white">600</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-primary-700 text-xs text-white">700</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-primary-800 text-xs text-white">800</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-primary-900 text-xs text-white">900</div>
            </div>
            {/* Secondary */}
            <div className="flex gap-1 overflow-hidden rounded-lg">
              <div className="flex h-12 flex-1 items-center justify-center bg-secondary-50 text-xs text-secondary-700">50</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-secondary-100 text-xs text-secondary-700">100</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-secondary-200 text-xs text-secondary-700">200</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-secondary-300 text-xs text-secondary-800">300</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-secondary-400 text-xs text-white">400</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-secondary-500 text-xs font-bold text-white">500</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-secondary-600 text-xs text-white">600</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-secondary-700 text-xs text-white">700</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-secondary-800 text-xs text-white">800</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-secondary-900 text-xs text-white">900</div>
            </div>
            {/* Success */}
            <div className="flex gap-1 overflow-hidden rounded-lg">
              <div className="flex h-12 flex-1 items-center justify-center bg-success-50 text-xs text-success-700">50</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-success-100 text-xs text-success-700">100</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-success-200 text-xs text-success-700">200</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-success-300 text-xs text-success-800">300</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-success-400 text-xs text-white">400</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-success-500 text-xs font-bold text-white">500</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-success-600 text-xs text-white">600</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-success-700 text-xs text-white">700</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-success-800 text-xs text-white">800</div>
              <div className="flex h-12 flex-1 items-center justify-center bg-success-900 text-xs text-white">900</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
