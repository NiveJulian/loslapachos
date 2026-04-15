"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

type Phase = "typing" | "showing-text" | "fading-to-flower" | "showing-flower" | "fading-to-text"

export function AnimatedLogo({ isScrolled = false }: { isScrolled?: boolean }) {
  const [phase, setPhase] = useState<Phase>("typing")
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Los Lapachos"

  const startTypingAnimation = useCallback(() => {
    setDisplayedText("")
    setPhase("typing")
    let index = 0

    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
        setPhase("showing-text")
      }
    }, 120)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const cleanup = startTypingAnimation()
    return cleanup
  }, [startTypingAnimation])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    switch (phase) {
      case "showing-text":
        timeout = setTimeout(() => setPhase("fading-to-flower"), 2500)
        break
      case "fading-to-flower":
        timeout = setTimeout(() => setPhase("showing-flower"), 600)
        break
      case "showing-flower":
        timeout = setTimeout(() => setPhase("fading-to-text"), 2500)
        break
      case "fading-to-text":
        timeout = setTimeout(() => {
          startTypingAnimation()
        }, 600)
        break
    }

    return () => clearTimeout(timeout)
  }, [phase, startTypingAnimation])

  const showText = phase === "typing" || phase === "showing-text" || phase === "fading-to-flower"
  const showFlower = phase === "showing-flower" || phase === "fading-to-text" || phase === "fading-to-flower"

  return (
    <div className="relative h-10 sm:h-12 flex items-center min-w-[140px] sm:min-w-[160px]">
      {/* Text */}
      <span
        className={`font-serif text-xl sm:text-2xl font-semibold tracking-wide whitespace-nowrap absolute left-0 transition-all duration-500 ease-in-out ${
          isScrolled ? "text-primary" : "text-white drop-shadow-md"
        } ${
          showText && phase !== "fading-to-flower"
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-2"
        }`}
        aria-label="Los Lapachos"
      >
        {displayedText}
        {phase === "typing" && (
          <span 
            className={`inline-block w-0.5 h-5 sm:h-6 ml-0.5 animate-pulse ${
              isScrolled ? "bg-accent" : "bg-white"
            }`}
            aria-hidden="true"
          />
        )}
      </span>

      {/* Flower */}
      <div
        className={`absolute left-0 transition-all duration-500 ease-in-out ${
          showFlower && phase !== "fading-to-text"
            ? "opacity-100 transform translate-y-0 scale-100"
            : "opacity-0 transform translate-y-2 scale-95"
        }`}
      >
        <Image
          src="/images/rosa-lapacho.png"
          alt="Rosa de Lapacho"
          width={100}
          height={40}
          className="h-8 sm:h-10 w-auto object-contain"
          priority
        />
      </div>
    </div>
  )
}
