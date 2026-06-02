import { StarIcon } from './Icons'

const TestimonialCard = ({ quote, initial, name, rating, role }) => {
  return (
    <article className="group relative flex h-full flex-col rounded-[28px] border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-sky-300/20 hover:shadow-[0_20px_60px_rgba(14,165,233,0.12)] sm:p-8">
      <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_45%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex space-x-1 sm:mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={`h-5 w-5 ${star <= rating ? 'text-amber-400' : 'text-slate-700'}`}
            />
          ))}
        </div>

        <blockquote className="text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {quote}
        </blockquote>

        <div className="mt-6 flex items-center border-t border-white/10 pt-5 sm:mt-8">
          <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-violet-400 font-display text-xl font-semibold text-white shadow-[0_10px_30px_rgba(14,165,233,0.16)]">
            {initial}
          </div>
          <div>
            <div className="font-display text-base font-semibold text-slate-100 sm:text-lg">{name}</div>
            <div className="mt-1 text-sm text-slate-500">{role}</div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard
