import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import ProblemSolution from '@/components/landing/ProblemSolution'
import Metrics from '@/components/landing/Metrics'
import Testimonials from '@/components/landing/Testimonials'
import FinalCTA from '@/components/landing/FinalCTA'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Metrics />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
