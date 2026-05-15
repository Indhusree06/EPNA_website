import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, TreePine } from 'lucide-react'
import { Link } from 'react-router-dom'

const slides = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Elmwood_Park_golf_course_%28Omaha%29_2.JPG/1280px-Elmwood_Park_golf_course_%28Omaha%29_2.JPG',
    alt: 'Elmwood Park Golf Course – 18th fairway',
    caption: 'The Park',
    title: 'Welcome to\nElmwood Park',
    subtitle: 'A historic neighborhood in the heart of Omaha — rich in architectural beauty, community spirit, and over a century of stories worth preserving.',
    credit: 'Ammodramus / CC0 – Elmwood Park Golf Course, Omaha',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elmwood_Park_golf_course_%28Omaha%29_1.JPG/1280px-Elmwood_Park_golf_course_%28Omaha%29_1.JPG',
    alt: 'Elmwood Park Golf Course – 15th green view',
    caption: 'Green Spaces',
    title: '216 Acres of\nNatural Beauty',
    subtitle: 'Established in 1889, Elmwood Park spans 216 acres of wooded ravines, trails, and open green space — one of Omaha\'s most beloved parks.',
    credit: 'Ammodramus / CC0 – Elmwood Park Golf Course, Omaha',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Elmwood_Tower%2C_Omaha.jpg/800px-Elmwood_Tower%2C_Omaha.jpg',
    alt: 'Elmwood Tower, Omaha',
    caption: 'Architecture',
    title: 'A Neighborhood\nBuilt to Last',
    subtitle: 'Colonial, Georgian, and Tudor Revival homes line our historic streets — an architectural legacy that defines the character of Elmwood Park.',
    credit: 'Hurstbergn / CC BY-SA 4.0 – Elmwood Tower, Omaha',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elmwood_Park_golf_course_%28Omaha%29_1.JPG/960px-Elmwood_Park_golf_course_%28Omaha%29_1.JPG',
    alt: 'Elmwood Park – scenic view',
    caption: 'Community',
    title: 'Your Neighborhood\nAssociation',
    subtitle: 'EPNA works every day to preserve, beautify, and connect the Elmwood Park community — from Dodge Street to Pacific Street.',
    credit: 'Ammodramus / CC0 – Elmwood Park, Omaha',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((idx, dir) => {
    setDirection(dir)
    setCurrent(idx)
  }, [])

  const prev = () => {
    const idx = (current - 1 + slides.length) % slides.length
    goTo(idx, -1)
  }

  const next = useCallback(() => {
    const idx = (current + 1) % slides.length
    goTo(idx, 1)
  }, [current, goTo])

  // Auto-advance every 5.5 seconds
  useEffect(() => {
    if (paused) return
    const timer = setTimeout(next, 5500)
    return () => clearTimeout(timer)
  }, [current, paused, next])

  const variants = {
    enter: (dir) => ({ opacity: 0, scale: dir > 0 ? 1.04 : 0.96 }),
    center: { opacity: 1, scale: 1 },
    exit: (dir) => ({ opacity: 0, scale: dir > 0 ? 0.96 : 1.04 }),
  }

  const slide = slides[current]

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d2318]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image layer */}
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            {/* Caption pill */}
            <div className="flex items-center gap-2 mb-5">
              <TreePine size={14} className="text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium">
                {slide.caption} · Omaha, NE · Est. 1889
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 whitespace-pre-line">
              {slide.title.split('\n').map((line, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-[#C9A84C]">{line}</span> : line}
                  {i < slide.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-9 max-w-xl">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="px-7 py-3.5 bg-[#C9A84C] hover:bg-[#b8963e] text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
              >
                Join EPNA
              </Link>
              <Link
                to="/about"
                className="px-7 py-3.5 border border-white/50 hover:border-white/90 text-white font-medium rounded-full transition-all duration-200 backdrop-blur-sm text-sm"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-[#C9A84C]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Photo credit */}
      <div className="absolute bottom-6 right-4 z-20">
        <AnimatePresence mode="wait">
          <motion.p
            key={`credit-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white/30 text-[10px] text-right"
          >
            {slide.credit}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 70 C360 0 1080 0 1440 70 L1440 70 L0 70 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
