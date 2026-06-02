import ServiceCard from './ServiceCard'
import { CodeWindowIcon, MegaphoneIcon, PaletteIcon, WorkflowIcon } from './Icons'
import { services } from '../content/site'

const serviceIcons = {
  'web-development': CodeWindowIcon,
  'ui-ux-design': PaletteIcon,
  'digital-marketing': MegaphoneIcon,
  'business-automation': WorkflowIcon,
}

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-24">
      <div className="section-shell z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="section-badge mb-5">Core Services</div>
          <h2 className="font-display text-4xl font-bold text-slate-50 md:text-5xl">
            Services Built for
            <span className="block bg-gradient-to-r from-sky-300 to-violet-400 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg">
            We create clean, responsive, and scalable digital experiences that help businesses present themselves better and work smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              {...service}
              icon={serviceIcons[service.key]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
