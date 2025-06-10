"use client"

import { useState, useEffect, useCallback } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  const checkIfMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    // Initial check
    checkIfMobile()

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkIfMobile, 100)
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [checkIfMobile])

  return isMobile
}
