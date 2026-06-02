import FeatureCard from './FeatureCard'
import { ArrowRightIcon } from './Icons'

const features = [
  {
    title: 'Clean Code Structure',
    description: 'Components are organized, reusable, and easy to maintain.',
  },
  {
    title: 'Responsive by Default',
    description:
      'Layouts are checked across desktop, tablet, and mobile screen sizes.',
  },
  {
    title: 'Business-Focused Design',
    description:
      'Every section is planned around clarity, trust, and meaningful user action.',
  },
  {
    title: 'Scalable Frontend Approach',
    description: 'The structure allows new sections and features to be added without clutter.',
  },
]

const processSteps = ['Plan', 'Design', 'Build', 'Test', 'Launch']

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative overflow-hidden py-20 md:py-24">
      <div className="section-shell z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-start">
          <div className="glass-panel p-6 sm:p-10">
            <div className="section-badge mb-5">Why Choose Us</div>
            <h2 className="font-display text-[2rem] font-bold leading-[1.02] text-slate-50 sm:text-4xl md:text-5xl">
              Built with clarity, structure, and
              <span className="md:block"> business goals in mind.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300/88 sm:mt-6 sm:text-lg sm:leading-8">
              NEXORA combines clean visual design with maintainable frontend structure, so every project is easy to use, responsive, and ready to grow.
            </p>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel overflow-hidden p-6 sm:p-10">
              <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 text-center sm:gap-4">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-1.5 sm:gap-4">
                    <div className="font-display text-[0.8rem] font-semibold text-sky-300 sm:text-lg">
                      {step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <ArrowRightIcon className="h-3 w-3 text-slate-600 sm:h-4 sm:w-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-slate-500">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Strategy</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Execution</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Support</span>
              </div>
              <h3 className="mt-5 font-display text-[1.75rem] font-semibold text-slate-50 sm:mt-6 sm:text-3xl">
                A practical process for thoughtful delivery
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                From planning through launch, NEXORA stays focused on clear communication, maintainable implementation, and a finished product that feels considered from first impression to final interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
