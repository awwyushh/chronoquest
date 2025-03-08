import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { Clock, ArrowRight } from 'lucide-react'
import SloingEffect from "./Anim/SloingEffect"

function LandingPage() {
  const landingRef = useRef(null)
  const videoRef = useRef(null)
  const [showVideo, setShowVideo] = useState(true)

  // Handle particle animation
  useEffect(() => {
    if (!landingRef.current || showVideo) return;

    gsap.to(".time-particle", {
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
      }
    })
  }, [showVideo])

  // Handle video end
  const handleVideoEnd = () => {
    setShowVideo(false)
  }

  return (
    <div
      ref={landingRef}
      className="landing-content relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-10"
    >
      {/* Video Background */}
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/vids/bg-cover.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {!showVideo && [...Array(20)].map((_, i) => (
        <div
          key={i}
          className="time-particle absolute rounded-full bg-amber-400/20"
          style={{
            width: `${Math.random() * 30 + 5}px`,
            height: `${Math.random() * 30 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5
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

        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Visualize and interact with historical timelines. Travel from the Medieval Era through
          the Renaissance, Industrial Age, and into the Modern Era.
        </p>

        <div className="inline-flex items-center justify-center">
          <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-600 p-[2px]">
            <div className="relative flex bg-black rounded-full">
              <button className="px-8 py-3 flex items-center gap-2 text-white font-medium">
                Begin Your Journey <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage