function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-start overflow-x-hidden py-20 px-4 sm:px-6 lg:px-8">

      {/* --- 背景の装飾（光のオーブ） --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* --- ヒーローセクション --- */}
      <section className="relative z-10 text-center w-full max-w-5xl mx-auto pt-16 sm:pt-24 lg:pt-32 pb-24 sm:pb-32">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-6 tracking-tight">
          KATSUYA | QUALITY-FIRST DEVELOPER
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 font-medium tracking-wider">
          QA（品質保証）の視点で、堅牢かつ美しいWebシステムを構築する。
        </p>
      </section>

      {/* --- About Me セクション --- */}
      <section className="relative z-10 w-full max-w-6xl mx-auto pb-20">

        {/* セクションヘッダー */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-sm sm:text-base font-semibold text-sky-400 tracking-[0.3em] mb-4">
            ABOUT ME
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300 tracking-tight">
            Quality-First Web Creator
          </p>
          <p className="text-sm sm:text-base text-slate-500 mt-3 tracking-wider">
            品質至上主義のWebクリエイター
          </p>
        </div>

        {/* Core Philosophy カード */}
        <div className="relative mb-16 sm:mb-20">
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-sky-500/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-sky-400/50 to-transparent"></div>
              <h3 className="text-xs sm:text-sm font-semibold text-sky-400 tracking-[0.25em] whitespace-nowrap">
                CORE PHILOSOPHY
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-indigo-400/50 to-transparent"></div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose tracking-wide">
              「デザインが美しい」ことは、現代のWeb開発において大前提です。私の真の価値は、
              <span className="text-sky-300 font-medium">QA（品質保証）の最前線で培った過酷な検証経験</span>
              に裏打ちされた、
              <span className="text-indigo-300 font-medium">「絶対に壊れない、見えない部分まで美しいシステム」</span>
              をゼロから構築できる点にあります。完成した後にバグを探すのではなく、コードを書く前の設計段階からバグの発生を仕組みで封じ込める。テストや修正の手間を劇的に減らし、最初から100%のクオリティと安心感を提供するのが、私の開発スタイルです。
            </p>
          </div>
        </div>

        {/* 3つのコア・バリュー */}
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-xs sm:text-sm font-semibold text-indigo-400 tracking-[0.25em]">
            THREE CORE VALUES
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-md md:max-w-2xl lg:max-w-none mx-auto">

          {/* Card 1: Defensive Architecture */}
          <article className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.07] hover:border-sky-400/30 transition-all duration-500 shadow-xl shadow-sky-500/5">
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-sky-500/30">
              01
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-100 mt-6 mb-4 tracking-tight">
              Defensive Architecture
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-loose tracking-wide">
              Reactのコンポーネント指向と、TypeScriptの厳格な「型安全」を駆使し、予期せぬエラーをコーディング中に検知・排除。仕様変更にも柔軟に耐えうる、保守性の高いクリーンなコードベースを構築します。
            </p>
          </article>

          {/* Card 2: Invisible Performance */}
          <article className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.07] hover:border-indigo-400/30 transition-all duration-500 shadow-xl shadow-indigo-500/5">
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-sky-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30">
              02
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-100 mt-6 mb-4 tracking-tight">
              Invisible Performance
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-loose tracking-wide">
              表示速度、SEO、アクセシビリティといった「目に見えない品質」に妥協しません。画像やSVGアセットの極限までの軽量化や、不要なコードの徹底的な削減により、Lighthouseスコアで最高水準を目指すストレスフリーなUXを提供します。
            </p>
          </article>

          {/* Card 3: Edge-Case Driven UI */}
          <article className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.07] hover:border-sky-400/30 transition-all duration-500 shadow-xl shadow-sky-500/5">
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-sky-500/30">
              03
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-200 mt-6 mb-4 tracking-tight">
              Edge-Case Driven UI
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-loose tracking-wide">
              「ユーザーが想定外の操作をしたらどうなるか」。数々のエッジケースを叩き潰してきたQAの意地悪な視点を、そのままUI設計に直結させています。あらゆるデバイスや操作パターンにおいても決して破綻しない、極めて堅牢なインターフェースを保証します。
            </p>
          </article>

        </div>
      </section>

      {/* --- Tech Stack セクション --- */}
      <section className="relative z-10 w-full max-w-6xl mx-auto mt-16 sm:mt-24 lg:mt-32 pb-20">

        {/* セクションヘッダー */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-sm sm:text-base font-semibold text-sky-400 tracking-[0.3em] mb-4">
            TECH STACK
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300 tracking-tight">
            Tools &amp; Technologies
          </p>
        </div>

        {/* 2カラムグリッド: Current Arsenal / Currently Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-md md:max-w-2xl lg:max-w-none mx-auto">

          {/* --- Current Arsenal カード --- */}
          <article className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-sky-500/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-sky-400/50 to-transparent"></div>
              <h3 className="text-xs sm:text-sm font-semibold text-sky-400 tracking-[0.25em] whitespace-nowrap">
                CURRENT ARSENAL
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-sky-400/30 to-transparent"></div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mb-6 tracking-wide leading-relaxed">
              現在の主力スタック / Production-Ready
            </p>
            <ul className="space-y-3">

              {/* HTML5 / CSS3 */}
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-sky-400/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-orange-500/90 to-rose-500/90 flex items-center justify-center shadow-md shadow-orange-500/20 flex-shrink-0">
                  <span className="text-white text-[13px] font-bold tracking-tight">{'</>'}</span>
                </div>
                <span className="text-slate-200 font-medium text-sm sm:text-base">HTML5 / CSS3</span>
              </li>

              {/* Tailwind CSS */}
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-sky-400/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-400/90 to-sky-500/90 flex items-center justify-center shadow-md shadow-cyan-500/20 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" aria-hidden="true">
                    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
                  </svg>
                </div>
                <span className="text-slate-200 font-medium text-sm sm:text-base">Tailwind CSS</span>
              </li>

              {/* JavaScript */}
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-sky-400/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-400/90 to-yellow-500/90 flex items-center justify-center shadow-md shadow-amber-500/20 flex-shrink-0">
                  <span className="text-slate-900 text-sm font-black tracking-tight">JS</span>
                </div>
                <span className="text-slate-200 font-medium text-sm sm:text-base">JavaScript</span>
              </li>

              {/* PHP */}
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-sky-400/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-violet-500/90 to-indigo-600/90 flex items-center justify-center shadow-md shadow-violet-500/20 flex-shrink-0">
                  <span className="text-white text-[11px] font-black tracking-tighter">PHP</span>
                </div>
                <span className="text-slate-200 font-medium text-sm sm:text-base">PHP</span>
              </li>

              {/* AI Prompt Engineering */}
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-sky-400/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-sky-400/90 to-indigo-500/90 flex items-center justify-center shadow-md shadow-sky-500/20 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z"/>
                  </svg>
                </div>
                <span className="text-slate-200 font-medium text-sm sm:text-base">AI Prompt Engineering</span>
              </li>

              {/* React 19 (Promoted to Arsenal) */}
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-sky-400/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-400/90 to-sky-600/90 flex items-center justify-center shadow-md shadow-cyan-500/20 flex-shrink-0">
                  <svg viewBox="-11.5 -10.232 23 20.463" className="w-6 h-6 text-white" aria-hidden="true">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                  </svg>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-200 font-medium text-sm sm:text-base">React</span>
                  <span className="text-xs font-semibold text-cyan-300/80 tracking-wider">v19</span>
                </div>
              </li>

              {/* TypeScript (Promoted to Arsenal) */}
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-sky-400/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500/90 to-indigo-600/90 flex items-center justify-center shadow-md shadow-blue-500/20 flex-shrink-0">
                  <span className="text-white text-sm font-black tracking-tight">TS</span>
                </div>
                <span className="text-slate-200 font-medium text-sm sm:text-base">TypeScript</span>
              </li>

              {/* Vite (Promoted to Arsenal) */}
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-sky-400/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-violet-500/90 to-amber-400/80 flex items-center justify-center shadow-md shadow-violet-500/20 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" aria-hidden="true">
                    <path d="M13 2L3 14h7l-1 8 11-14h-8l1-6z"/>
                  </svg>
                </div>
                <span className="text-slate-200 font-medium text-sm sm:text-base">Vite</span>
              </li>

            </ul>
          </article>

          {/* --- Currently Learning カード --- */}
          <article className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-indigo-500/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-indigo-400/50 to-transparent"></div>
              <h3 className="text-xs sm:text-sm font-semibold text-indigo-400 tracking-[0.25em] whitespace-nowrap">
                CURRENTLY LEARNING
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-indigo-400/30 to-transparent"></div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mb-6 tracking-wide leading-relaxed">
              次なる挑戦 / Mastering for Next Frontier
            </p>
            <ul className="space-y-3">

              {/* Next.js */}
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-indigo-400/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-slate-700/95 to-slate-950/95 border border-white/10 flex items-center justify-center shadow-md shadow-slate-900/40 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" aria-hidden="true">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.038-.14.045-.495.045H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-200 font-medium text-sm sm:text-base">Next.js</span>
                    <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 px-2 py-1 rounded-md tracking-wider flex-shrink-0">NEW</span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-400 tracking-wide leading-relaxed">
                    フルスタックWeb開発への挑戦
                  </span>
                </div>
              </li>

              {/* Python */}
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-indigo-400/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500/90 to-amber-400/85 flex items-center justify-center shadow-md shadow-blue-500/20 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" aria-hidden="true">
                    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.914 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051a1.048 1.048 0 0 1-1.046-1.051c0-.582.468-1.052 1.046-1.052z"/>
                    <path d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.718 24 12.087 24zm3.206-1.85a1.048 1.048 0 0 1-1.046-1.052c0-.581.468-1.051 1.046-1.051.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-200 font-medium text-sm sm:text-base">Python</span>
                    <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 px-2 py-1 rounded-md tracking-wider flex-shrink-0">NEW</span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-400 tracking-wide leading-relaxed">
                    AI連携・バックエンド・業務自動化への挑戦
                  </span>
                </div>
              </li>

            </ul>
          </article>

        </div>
      </section>

      {/* --- Projects セクション --- */}
      <section className="relative z-10 w-full max-w-6xl mx-auto mt-16 sm:mt-24 lg:mt-32 pb-20">

        {/* セクションヘッダー */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-sm sm:text-base font-semibold text-sky-400 tracking-[0.3em] mb-4">
            PROJECTS
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300 tracking-tight">
            Selected Works &amp; Experiments
          </p>
        </div>

        {/* 2カラムグリッド */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-md md:max-w-2xl lg:max-w-none mx-auto">

          {/* --- Project 1: The Mother Ship --- */}
          <article className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-sky-500/5 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-sky-400/30 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500">

            {/* 画像プレースホルダー */}
            <div className="relative h-48 sm:h-56 bg-slate-800/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-sky-500/30 blur-3xl group-hover:bg-sky-400/40 transition-colors duration-700"></div>
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.12) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              ></div>
              <div className="relative h-full flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300 tracking-tight group-hover:scale-105 transition-transform duration-500">
                  The Mother Ship
                </span>
              </div>
              {/* ステータスバッジ */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 backdrop-blur-md px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-semibold text-emerald-300 tracking-wider">LIVE</span>
              </div>
            </div>

            {/* コンテンツ */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-100 mb-2 tracking-tight">
                The Mother Ship
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-sky-400/80 tracking-[0.2em] mb-5">
                PERSONAL PORTFOLIO WEBSITE
              </p>
              <p className="text-slate-300 text-sm leading-loose tracking-wide mb-6">
                QAエンジニアとしての品質至上主義を体現したポートフォリオサイト。ReactとTailwind CSSを採用し、ピクセルパーフェクトなデザイン、Lighthouseスコアを意識したパフォーマンス、そして完全なレスポンシブUIを実装。現在も継続的にアップデート中。
              </p>

              {/* 使用技術タグ */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full tracking-wider">React</span>
                <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 px-3 py-1 rounded-full tracking-wider">TypeScript</span>
                <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full tracking-wider">Tailwind CSS</span>
              </div>

              {/* アクション */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200 transition-colors"
              >
                <span className="border-b border-sky-400/30 group-hover:border-sky-300 transition-colors pb-0.5">View Source</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* --- Project 2: Classified Project --- */}
          <article className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-indigo-500/5 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-indigo-400/30 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500">

            {/* 画像プレースホルダー */}
            <div className="relative h-48 sm:h-56 bg-slate-800/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-violet-500/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-indigo-500/30 blur-3xl group-hover:bg-indigo-400/40 transition-colors duration-700"></div>
              {/* 機密文書風の斜めストライプ */}
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, rgba(129, 140, 248, 0.35) 0px, rgba(129, 140, 248, 0.35) 2px, transparent 2px, transparent 22px)',
                }}
              ></div>
              <div className="relative h-full flex flex-col items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-500">
                <svg
                  className="w-10 h-10 text-indigo-200/80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span className="text-xs font-bold text-indigo-200/90 tracking-[0.35em]">CLASSIFIED</span>
              </div>
              {/* ステータスバッジ */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 backdrop-blur-md px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-[10px] font-semibold text-amber-300 tracking-wider">WIP</span>
              </div>
            </div>

            {/* コンテンツ */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-100 mb-2 tracking-tight">
                Classified Project
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-indigo-400/80 tracking-[0.2em] mb-5">
                AI-DRIVEN APPLICATION
              </p>
              <p className="text-slate-300 text-sm leading-loose tracking-wide mb-6">
                最新のプロンプトエンジニアリングとWebフロントエンド技術を融合させた次世代アプリケーション。現在、要件定義およびプロトタイプ開発フェーズ。
              </p>

              {/* 使用技術タグ */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 px-3 py-1 rounded-full tracking-wider">Next.js</span>
                <span className="text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full tracking-wider">AI API</span>
                <span className="text-[11px] font-semibold text-slate-400 bg-slate-500/10 border border-slate-400/20 px-3 py-1 rounded-full tracking-wider">TBA</span>
              </div>

              {/* アクション (非活性) */}
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300/90 cursor-not-allowed select-none bg-amber-500/5 border border-amber-400/20 px-4 py-2 rounded-full"
                aria-disabled="true"
                role="status"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="tracking-wider">In Development</span>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* --- Contact セクション --- */}
      <section className="relative z-10 w-full max-w-4xl mx-auto mt-16 sm:mt-24 lg:mt-32 pb-20">

        {/* セクションヘッダー */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-sm sm:text-base font-semibold text-sky-400 tracking-[0.3em] mb-4">
            CONTACT
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300 tracking-tight">
            Get In Touch
          </p>
        </div>

        {/* メインカード */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-2xl shadow-sky-500/5 text-center">

          {/* 説明文 */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose tracking-wide max-w-2xl mx-auto mb-10 sm:mb-12">
            新しいプロジェクトのご相談、
            <span className="text-sky-300 font-medium">QA（品質保証）に関するディスカッション</span>
            、または単なる技術的なおしゃべりまで、何でもお気軽にご連絡ください。あなたのビジョンを
            <span className="text-indigo-300 font-medium">最高品質のプロダクト</span>
            へと昇華させるお手伝いをします。
          </p>

          {/* メールCTA */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <a
              href="mailto:your-email@example.com"
              className="group inline-flex items-center gap-3 px-7 sm:px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/40 hover:-translate-y-0.5 hover:from-sky-400 hover:to-indigo-400 transition-all duration-300 min-h-[52px]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Send an Email</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 区切り線 */}
          <div className="flex items-center gap-4 max-w-xs mx-auto mb-8 sm:mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15"></div>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-[0.3em]">OR FIND ME ON</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15"></div>
          </div>

          {/* ソーシャルアイコン */}
          <div className="flex items-center justify-center gap-4 sm:gap-5">
            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub プロフィールを開く"
              className="group inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-sky-400/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="#"
              aria-label="X (Twitter) プロフィールを開く"
              className="group inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-indigo-400/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <svg className="w-5 h-5 sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn プロフィールを開く"
              className="group inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-sky-400/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">

          {/* コピーライト */}
          <p className="text-xs sm:text-sm text-slate-400 tracking-wider order-2 sm:order-1">
            <span className="text-slate-500">©</span> 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300 font-semibold">Toshiwo</span>. All rights reserved.
          </p>

          {/* Back to Top ボタン */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="ページの最上部に戻る"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.03] border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-full hover:bg-white/[0.08] hover:border-sky-400/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 order-1 sm:order-2 min-h-[44px]"
          >
            <span className="tracking-wider">Back to Top</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>

        </div>

        {/* サブテキスト */}
        <p className="text-center text-[10px] sm:text-xs text-slate-600 tracking-[0.2em] mt-8 sm:mt-10">
          BUILT WITH REACT 19 &middot; TYPESCRIPT &middot; TAILWIND CSS
        </p>
      </footer>

    </div>
  );
}

export default App;
