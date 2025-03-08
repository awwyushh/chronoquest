import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Clock, Menu, Home, ChevronRight } from 'lucide-react'

function MenuBar({ onNavigate, onReturnHome, isNavbarVisible }) {
  const menuRef = useRef(null)
  
  // useEffect(() => {
  //   // Animate menu items on mount
  //   if (menuRef.current) {
  //     gsap.from(".menu-item", {
  //       opacity: 0,
  //       x: -20,
  //       stagger: 0.1,
  //       duration: 0.6,
  //       ease: "power2.out",
  //       delay: 0.8
  //     })
  //   }
  // }, [])

  return (
    <div 
      ref={menuRef} 
      className="menu-wrapper fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-2">
        {/* <Clock className="h-6 w-6 text-amber-400" /> */}
        <h1 className="text-4xl text-amber-100 font-bold tracking-wider">CHRONOS</h1>
      </div>
      
      <div className="flex items-center gap-6">
        {isNavbarVisible ? (
          <button 
            onClick={onReturnHome}
            className="menu-item flex items-center gap-2 text-white/80 hover:text-amber-400 transition-colors duration-300"
          >
            <Home className="h-5 w-5" />
            <span>Return Home</span>
          </button>
        ) : (
          <>
            <button className="menu-item text-white/80 hover:text-amber-400 transition-colors duration-300">
              About
            </button>
            <button className="menu-item text-white/80 hover:text-amber-400 transition-colors duration-300">
              Contact
            </button>
            <button 
              onClick={onNavigate}
              className="menu-item flex items-center gap-1 bg-amber-400 text-black px-4 py-2 rounded hover:bg-amber-300 transition-colors duration-300"
            >
              <span>Explore Timelines</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default MenuBar
