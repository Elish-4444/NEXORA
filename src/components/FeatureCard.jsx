import { CheckCircleIcon } from './Icons'

const FeatureCard = ({ title, description }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition duration-300 hover:border-emerald-300/20 hover:bg-white/[0.07] sm:px-5 sm:py-5">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="mt-0.5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-2 text-emerald-300">
          <CheckCircleIcon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-slate-100 sm:text-xl">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
