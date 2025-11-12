import Hero from '../components/Hero'
import ScrapSection from '../components/ScrapSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <ScrapSection title="Why we exist" subtitle="Design deserves editorial-quality social — tactile, clever, and measurable.">
        <div className="prose max-w-none text-black">
          <p>
            We help studios build a clear voice and a consistent presence that turns aesthetic authority into real demand.
          </p>
        </div>
      </ScrapSection>
    </div>
  )
}
