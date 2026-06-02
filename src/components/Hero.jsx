import { ArrowRightIcon } from './Icons'

const workflowSteps = [
  { id: '01', label: 'Discover' },
  { id: '02', label: 'Design' },
  { id: '03', label: 'Develop' },
  { id: '04', label: 'Launch' },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-44"
    >
      <div className="section-shell z-10">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="section-badge mb-7">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse-soft" />
              Websites &bull; UI/UX &bull; Digital Workflows
            </div>

            <h1 className="font-display text-[2.65rem] font-bold leading-[0.98] text-slate-50 sm:text-6xl lg:text-7xl">
              Build a Digital Presence
              <span className="mt-2 block bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                That Converts.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300/88 sm:mt-6 sm:text-xl sm:leading-8 lg:mx-0">
              NEXORA designs and develops responsive websites, polished brand experiences, and practical digital systems for startups and growing businesses.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:mt-10 sm:flex-row lg:justify-start">
              <a href="#contact" className="cta-primary px-8 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]">
                Start a Project
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              <a href="#services" className="cta-secondary px-8 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]">
                View Services
              </a>
            </div>
            
            <p className="mt-5 text-sm leading-6 text-slate-400 lg:mx-0">
              Strategy, design, development, and launch support in one focused process.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[26rem] lg:mx-0 lg:max-w-none">
            <div className="animate-float absolute -left-6 top-10 h-24 w-24 rounded-full bg-sky-500/18 blur-3xl" />
            <div className="animate-float-delayed absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-violet-500/18 blur-3xl" />

            <div className="glass-panel relative overflow-hidden p-5 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_35%)]" />

              <div className="relative flex items-center justify-between border-b border-white/10 pb-4 sm:pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Project Workflow</p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-slate-50 sm:text-2xl">
                    From first brief to launch-ready website
                  </h2>
                </div>
              </div>

              <div className="relative mt-5 rounded-3xl border border-white/10 bg-slate-950/55 p-4 sm:mt-6 sm:p-5">
                <div className="grid grid-cols-4 gap-2">
                  {workflowSteps.map((step, idx) => (
                    <div key={step.id} className="relative flex flex-col items-center">
                      <div className="z-10 flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-[0.65rem] font-semibold text-sky-300 sm:h-8 sm:w-8 sm:text-xs">
                        {step.id}
                      </div>
                      <div className="mt-2 text-[0.7rem] font-medium text-slate-300 sm:mt-3 sm:text-xs">{step.label}</div>
                      {idx !== workflowSteps.length - 1 && (
                        <div className="absolute right-0 top-4 -z-0 w-full translate-x-1/2 border-t border-dashed border-white/10" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:mt-8 sm:p-4">
                  <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 sm:mb-4">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="h-2 w-16 rounded-full bg-white/10" />
                  </div>
                  
                  <div className="space-y-3">
                    {/* Hero block wireframe */}
                    <div className="flex h-20 w-full items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/10 to-violet-500/10 sm:h-24">
                      <div className="space-y-2 text-center w-full px-8">
                        <div className="h-3 w-3/4 mx-auto rounded-full bg-white/20" />
                        <div className="h-2 w-1/2 mx-auto rounded-full bg-white/10" />
                      </div>
                    </div>
                    
                    {/* Content cards wireframe */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 rounded-xl bg-white/5 p-3 sm:h-20">
                        <div className="h-2.5 w-8 rounded-full bg-cyan-400/40 mb-2" />
                        <div className="h-2 w-full rounded-full bg-white/10 mb-1" />
                        <div className="h-2 w-2/3 rounded-full bg-white/10" />
                      </div>
                      <div className="h-16 rounded-xl bg-white/5 p-3 sm:h-20">
                        <div className="h-2.5 w-8 rounded-full bg-violet-400/40 mb-2" />
                        <div className="h-2 w-full rounded-full bg-white/10 mb-1" />
                        <div className="h-2 w-2/3 rounded-full bg-white/10" />
                      </div>
                    </div>
                    
                    {/* Footer strip wireframe */}
                    <div className="flex h-5 w-full items-center justify-between rounded-md bg-white/[0.02] px-3 sm:h-6">
                      <div className="h-1.5 w-12 rounded-full bg-white/10" />
                      <div className="flex gap-2">
                        <div className="h-1.5 w-4 rounded-full bg-white/10" />
                        <div className="h-1.5 w-4 rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
