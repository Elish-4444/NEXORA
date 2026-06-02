import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-slate-50 selection:bg-sky-400/20 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-sky-500/14 blur-[130px]" />
        <div className="absolute right-[-8rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-violet-500/16 blur-[120px]" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="bg-grid-pattern absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.15),rgba(3,7,18,0.82)_40%,rgba(3,7,18,1))]" />
      </div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
