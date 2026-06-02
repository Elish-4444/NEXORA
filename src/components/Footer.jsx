import { ArrowRightIcon, InstagramIcon, LinkedInIcon, XSocialIcon } from './Icons'
import { navLinks, services, siteMeta, socialLinks } from '../content/site'

const socialIconMap = {
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  x: XSocialIcon,
}

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 pb-8 pt-20 sm:pt-24">
      <div className="section-shell z-10">
        <div className="glass-panel mb-10 overflow-hidden p-6 sm:p-10">
          <div className="grid w-full gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="w-full min-w-0">
              <div className="section-badge mb-5">Contact</div>
              <h2 className="font-display text-[2rem] font-bold leading-[1.08] text-slate-50 sm:text-4xl">
                Ready to build a sharper online presence?
              </h2>
              <p className="mt-4 max-w-none text-base leading-7 text-slate-400 sm:max-w-2xl">
                NEXORA builds modern websites, refined brand experiences, and efficient digital workflows for startups and growing businesses.
              </p>
            </div>
            <a href={`mailto:${siteMeta.email}`} className="cta-primary w-full justify-center px-6 py-3.5 text-sm sm:w-auto sm:px-8 sm:py-4 sm:text-base">
              {siteMeta.email}
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/10 pb-10 sm:gap-12 sm:pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-2xl font-bold tracking-[0.35em] text-slate-50">
              <span className="text-sky-400">{siteMeta.brandAccent}</span>
              {siteMeta.brandName.slice(siteMeta.brandAccent.length)}
            </a>
            <p className="mt-4 max-w-xs text-slate-400">
              Digital solutions for startups and growing businesses.
            </p>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Social</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon]

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition duration-300 hover:border-sky-300/20 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Quick Links</h3>
            <ul className="mt-5 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-300 transition hover:text-sky-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Services</h3>
            <ul className="mt-5 space-y-4">
              {services.map((service) => (
                <li key={service.key}>
                  <a href="#services" className="text-sm text-slate-300 transition hover:text-sky-300">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li>
                <a href={`mailto:${siteMeta.email}`} className="transition hover:text-sky-300">
                  {siteMeta.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-slate-500 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 {siteMeta.brandName}. All rights reserved.</p>
          <p>Designed for clarity. Built for growth.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
