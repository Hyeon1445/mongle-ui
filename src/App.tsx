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

        {/* Input */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Input</h2>
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
            <input
              type="text"
              placeholder="Disabled input"
              disabled
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 transition-all placeholder:text-gray-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            />
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
