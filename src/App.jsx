import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import LandingPage from "../components/LandingPage"
import NavbarPage from "../components/NavbarPage"
import MenuBar from "../components/MenuBar"

function App() {
  const [showNavbarPage, setShowNavbarPage] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const appRef = useRef(null)

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
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power3.inOut"
    })
    .to(".menu-wrapper", {
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
        setShowNavbarPage(false)
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

  // useEffect(() => {
  //   // Initial animation
  //   gsap.from(".landing-content", {
  //     opacity: 0,
  //     y: 30,
  //     duration: 1.2,
  //     ease: "power3.out",
  //     delay: 0.3
  //   })
    
  //   gsap.from(".menu-wrapper", {
  //     opacity: 0,
  //     y: -20,
  //     duration: 0.8,
  //     ease: "power2.out",
  //     delay: 0.6
  //   })
  // }, [])

  return (
    <div ref={appRef} className="relative min-h-screen bg-black text-white overflow-hidden">
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
