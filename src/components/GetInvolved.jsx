import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const tabs = ['Events', 'Architecture', 'Projects', 'Membership']

const cards = {
  Events: [
    {
      img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=700&q=80',
      tag: 'Farmers Market',
      date: 'Every Saturday · Summer 2025',
      title: "Aksarben Village Farmers Market",
      to: '/events',
    },
    {
      img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
      tag: 'Community',
      date: 'June 2025',
      title: 'Shakespeare on the Green Festival',
      to: '/events',
    },
    {
      img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=80',
      tag: 'Concerts',
      date: 'July – August 2025',
      title: 'Stinson Park Outdoor Concert Series',
      to: '/events',
    },
    {
      img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=700&q=80',
      tag: 'Fitness',
      date: 'August 2025',
      title: 'Annual Neighborhood Community Run',
      to: '/events',
    },
    {
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80',
      tag: 'Recreation',
      date: 'All Summer',
      title: 'Creighton Prep Cross Country Invite',
      to: '/events',
    },
  ],
  Architecture: [
    {
      img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=700&q=80',
      tag: 'Tudor Revival',
      date: '67th Street',
      title: 'Tudor Revival Homes of Elmwood Park',
      to: '/architecture',
    },
    {
      img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=700&q=80',
      tag: 'Colonial',
      date: 'Leavenworth to Pacific',
      title: 'Colonial Style Residences',
      to: '/architecture',
    },
    {
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80',
      tag: 'Georgian',
      date: '68th–70th Street',
      title: 'Georgian Architecture Highlights',
      to: '/architecture',
    },
    {
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
      tag: 'Streetscape',
      date: 'Neighborhood-wide',
      title: 'Tree-Lined Historic Streets',
      to: '/architecture',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Elmwood_Tower%2C_Omaha.jpg/500px-Elmwood_Tower%2C_Omaha.jpg',
      tag: 'Landmark',
      date: 'Omaha, NE',
      title: 'Elmwood Tower – Neighborhood Landmark',
      to: '/architecture',
    },
  ],
  Projects: [
    {
      img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80',
      tag: 'Landscaping',
      date: 'Active · 2025',
      title: 'Dodge Street Beautification Initiative',
      to: '/projects',
    },
    {
      img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80',
      tag: 'Volunteers',
      date: 'Ongoing',
      title: 'Park Cleanup & Restoration Effort',
      to: '/projects',
    },
    {
      img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=700&q=80',
      tag: 'Green Spaces',
      date: 'Active · 2025',
      title: 'Howard Hill Neighborhood Greening',
      to: '/projects',
    },
    {
      img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80',
      tag: 'Preservation',
      date: 'Ongoing',
      title: 'Historic Architecture Documentation',
      to: '/projects',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Elmwood_Park_golf_course_%28Omaha%29_2.JPG/960px-Elmwood_Park_golf_course_%28Omaha%29_2.JPG',
      tag: 'Recreation',
      date: 'Ongoing',
      title: 'Elmwood Park Golf Course Preservation',
      to: '/projects',
    },
  ],
  Membership: [
    {
      img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
      tag: 'Join',
      date: 'Open Now',
      title: 'Become an EPNA Member Today',
      to: '/membership',
    },
    {
      img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=700&q=80',
      tag: 'Community',
      date: 'Monthly Meetings',
      title: 'Attend Neighborhood Association Meetings',
      to: '/membership',
    },
    {
      img: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=700&q=80',
      tag: 'Donate',
      date: 'Support EPNA',
      title: 'Fund Beautification & Community Events',
      to: '/donate',
    },
    {
      img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=700&q=80',
      tag: 'Outreach',
      date: 'Spring 2025',
      title: 'Annual Canvassing & Membership Drive',
      to: '/membership',
    },
    {
      img: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?auto=format&fit=crop&w=700&q=80',
      tag: 'Volunteer',
      date: 'Year-round',
      title: 'Volunteer on Special Projects',
      to: '/projects',
    },
  ],
}

const VISIBLE = 3

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState('Events')
  const [offset, setOffset] = useState(0)

  const list = cards[activeTab]
  const canPrev = offset > 0
  const canNext = offset + VISIBLE < list.length

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setOffset(0)
  }

  return (
    <section className="py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header row: tabs left, arrows right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          {/* Tabs */}
          <div className="flex gap-0 border-b border-[#E8E0D0] w-full sm:w-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative px-4 pb-3 pt-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-[#1A3C2E]'
                    : 'text-[#2B2B2B]/40 hover:text-[#2B2B2B]/70'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A3C2E]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2 shrink-0 pb-1">
            <button
              onClick={() => setOffset(o => Math.max(0, o - 1))}
              disabled={!canPrev}
              className="w-10 h-10 rounded-full border border-[#E8E0D0] flex items-center justify-center text-[#2B2B2B] hover:border-[#1A3C2E] hover:text-[#1A3C2E] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setOffset(o => Math.min(list.length - VISIBLE, o + 1))}
              disabled={!canNext}
              className="w-10 h-10 rounded-full border border-[#E8E0D0] flex items-center justify-center text-[#2B2B2B] hover:border-[#1A3C2E] hover:text-[#1A3C2E] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${offset}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {list.slice(offset, offset + VISIBLE).map((card, i) => (
              <Link
                key={`${activeTab}-${offset}-${i}`}
                to={card.to}
                className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Photo */}
                <div className="relative overflow-hidden h-72">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Info strip */}
                <div className="bg-white px-5 py-4 border-t border-[#F0EAE0]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">
                      {card.tag}
                    </span>
                    <span className="text-[#2B2B2B]/30 text-xs">·</span>
                    <span className="text-[#2B2B2B]/40 text-xs">{card.date}</span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#1A3C2E] leading-snug group-hover:text-[#C9A84C] transition-colors duration-200">
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: list.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setOffset(i)}
              className={`transition-all duration-300 rounded-full ${
                i === offset
                  ? 'w-6 h-1.5 bg-[#1A3C2E]'
                  : 'w-1.5 h-1.5 bg-[#2B2B2B]/20 hover:bg-[#2B2B2B]/40'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
