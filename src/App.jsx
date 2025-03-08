import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import LandingPage from "../components/LandingPage"
import NavbarPage from "../components/NavbarPage"
import MenuBar from "../components/MenuBar"
import ClickSpark from "../components/Anim/ClickSpark"

// Register ScrollToPlugin for GSAP
gsap.registerPlugin(ScrollToPlugin)

function App() {
  const [showNavbarPage, setShowNavbarPage] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const appRef = useRef(null)

  useEffect(() => {
    // Initial animation
    gsap.from(".landing-content", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3
    })

    gsap.from(".menu-wrapper", {
      opacity: 100,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.6
    })

    // Enable regular scrolling
    document.body.style.overflow = "auto"
    document.documentElement.style.overflow = "auto"
  }, [])

  const handleNavigate = () => {
    if (transitioning) return
    setTransitioning(true)
    const tl = gsap.timeline({
      onComplete: () => {
        setShowNavbarPage(true)
        setTransitioning(false)
      }
    })

    tl.to(".landing-content", {
      opacity: 100,
      y: -50,
      duration: 0.8,
      ease: "power3.inOut"
    })
      .to(".menu-wrapper", {
        opacity:100,
        y: -20,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4")
  }

  const handleReturnToLanding = () => {
    if (transitioning) return
    setTransitioning(true)
    const tl = gsap.timeline({
      onComplete: () => {
        setShowNavbarPage(true)
        setTransitioning(false)
      }
    })

    tl.to(".era-section", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.inOut"
    })
  }

  return (
      <div ref={appRef} className="relative min-h-screen bg-black text-white overflow-x-hidden">
        <MenuBar
          onNavigate={handleNavigate}
          onReturnHome={handleReturnToLanding}
          isNavbarVisible={showNavbarPage}
        />

        {!showNavbarPage ? (
          <LandingPage />
        ) : (
          <NavbarPage />
        )}
      </div>
  )
}

export default App