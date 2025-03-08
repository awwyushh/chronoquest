import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ArrowDownCircleIcon, ArrowRight } from 'lucide-react'
import SloingEffect from "./Anim/SloingEffect"
import ClickSpark from "./Anim/ClickSpark"
import ImageTrail from "./Anim/ImageTrail"

function LandingPage() {
  const landingRef = useRef(null)
  const particlesRef = useRef([])
  const secondSectionRef = useRef(null)

  useEffect(() => {
    const particles = particlesRef.current.filter(Boolean)

    gsap.to(particles, {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      opacity: "random(0.3, 0.8)",
      duration: "random(3, 6)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.2,
        from: "random"
      },
      overwrite: "auto",
      lazy: true
    })

    return () => {
      gsap.killTweensOf(particles)
    }
  }, [])

  const scrollToSecondSection = () => {
    if (!secondSectionRef.current) return

    const sectionTop = secondSectionRef.current.offsetTop

    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: sectionTop,
        autoKill: true
      },
      ease: "power2.inOut"
    })
  }

  return (
    <ClickSpark
      sparkColor='#FFCA28'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div
        ref={landingRef}
        className="relative min-h-[200vh] overflow-x-hidden"
      >
        <section
          className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-10"
        >
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none will-change-transform"
          >
            <source src="/vids/bg-cover.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* ImageTrail Overlay */}
          <div style={{ height: '500px', position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', zIndex: 5 }}>
            <ImageTrail
              key={1}
              items={[
                'https://picsum.photos/id/287/300/300',
                'https://picsum.photos/id/1001/300/300',
                'https://picsum.photos/id/1025/300/300',
                'https://picsum.photos/id/1026/300/300',
                'https://picsum.photos/id/1027/300/300',
                'https://picsum.photos/id/1028/300/300',
                'https://picsum.photos/id/1029/300/300',
                'https://picsum.photos/id/1030/300/300',
              ]}
              variant={6}
            />
          </div>

          {/* Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              ref={el => particlesRef.current[i] = el}
              className="time-particle absolute rounded-full bg-amber-400/20 will-change-transform"
              style={{
                width: `${Math.random() * 30 + 5}px`,
                height: `${Math.random() * 30 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
              }}
            />
          ))}

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Live It ALL</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Again.
              </span>
            </h1>

            <div style={{ position: 'relative', height: '300px' }}>
              <SloingEffect
                text="Chrono"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#FFCA28"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>

            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto text-wrap">
              Visualize and interact with historical timelines. Travel from the Medieval Era through
              the Renaissance, Industrial Age, and into the Modern Era.
              <ArrowDownCircleIcon className="animate-bounce ml-8 mt-4 inline-block" />
            </p>
          </div>
        </section>

        <section
          ref={secondSectionRef}
          className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-black/95"
          id="second-section"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Explore Time
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-gray-900/50 rounded-lg">
                <h3 className="text-2xl font-semibold text-amber-400 mb-4">Interactive Timelines</h3>
                <p className="text-white/70">
                  Dive into history with dynamic timelines you can zoom, pan, and explore.
                </p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-lg">
                <h3 className="text-2xl font-semibold text-amber-400 mb-4">Era Visualization</h3>
                <p className="text-white/70">
                  See historical events come to life with rich visuals and animations.
                </p>
              </div>
            </div>

            <button className="px-8 py-3 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </ClickSpark>
  )
}

export default LandingPage