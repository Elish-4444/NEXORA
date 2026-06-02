const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sky-300/30 hover:shadow-[0_22px_60px_rgba(14,165,233,0.16)] sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-sky-300 transition duration-300 group-hover:-translate-y-1 group-hover:border-sky-300/20 group-hover:bg-sky-400/10 sm:p-4">
          <Icon className="h-7 w-7" />
        </div>

        <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500 sm:mt-8 sm:tracking-[0.28em]">
          <span>Service</span>
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-white sm:text-2xl">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-slate-400 sm:leading-7">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
