function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold text-primary-500 mb-4">
          Mongle UI 🌸
        </h1>
        <p className="text-2xl text-neutral-600 mb-2">
          몽글몽글한 감성의 컴포넌트 라이브러리
        </p>
        <p className="text-lg text-neutral-500 mb-8">
          Cozy, warm, and fluffy React components
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <div className="w-20 h-20 rounded-lg bg-primary-500 shadow-soft flex items-center justify-center">
            <span className="text-white text-xs font-semibold">Coral</span>
          </div>
          <div className="w-20 h-20 rounded-lg bg-secondary-500 shadow-soft flex items-center justify-center">
            <span className="text-white text-xs font-semibold">Periwinkle</span>
          </div>
          <div className="w-20 h-20 rounded-lg bg-success-500 shadow-soft flex items-center justify-center">
            <span className="text-white text-xs font-semibold">Mint</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-cozy">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Build
          </h2>
          <p className="text-neutral-600">
            디자인 시스템이 준비되었습니다!<br />
            컴포넌트 개발을 시작하세요.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
