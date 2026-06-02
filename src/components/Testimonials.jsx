import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    quote:
      'NEXORA helped us turn a rough idea into a clean and professional website.',
    initial: 'R',
    name: 'Riya Mehta',
    rating: 4,
    role: 'Founder, Bloom & Co.',
  },
  {
    quote:
      'The layout was responsive, easy to understand, and matched the way we wanted our service to feel.',
    initial: 'A',
    name: 'Arjun Rao',
    rating: 5,
    role: 'Owner, UrbanFit Studio',
  },
  {
    quote:
      'The project was handled with clear communication, strong attention to detail, and a polished final result.',
    initial: 'S',
    name: 'Sameer Khan',
    rating: 3,
    role: 'Operations Manager, PrimeWorks',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 md:py-24">
      <div className="section-shell z-10">
        <div className="mb-14 text-center sm:mb-16">
          <div className="section-badge mb-5">Testimonials</div>
          <h2 className="font-display text-4xl font-bold text-slate-50 md:text-5xl">
            Client Feedback
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Practical feedback from businesses using NEXORA-style digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
