import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, MapPin } from 'lucide-react'
import HeroCarousel from '../components/HeroCarousel'
import GetInvolved from '../components/GetInvolved'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}


const announcements = [
  {
    tag: 'Events',
    date: 'May 2025',
    title: 'Summer Events Calendar Now Available',
    desc: 'Check out our full lineup of Stinson Park concerts, farmers markets, and neighborhood runs happening this season.',
  },
  {
    tag: 'Projects',
    date: 'April 2025',
    title: 'Dodge Street Landscaping Update',
    desc: 'Phase two of our Dodge Street beautification initiative is underway. Learn more about the improvements coming to our main corridor.',
  },
  {
    tag: 'Membership',
    date: 'March 2025',
    title: 'Annual Membership Drive Now Open',
    desc: 'Help strengthen our neighborhood association — join or renew your EPNA membership today.',
  },
]

const highlights = [
  {
    title: 'Architecture & Homes',
    desc: 'Colonial, Georgian & Tudor Revival homes line the historic streets of Elmwood Park.',
    to: '/architecture',
    emoji: '🏛️',
  },
  {
    title: 'Elmwood Park History',
    desc: 'Founded in 1889, the park spans 216 acres and has served Omaha for over a century.',
    to: '/history',
    emoji: '📜',
  },
  {
    title: 'Business Directory',
    desc: 'Discover local businesses in Aksarben Village and the Stinson area.',
    to: '/directory',
    emoji: '🏪',
  },
]

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Get Involved – tabbed image tile carousel */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-2">
          <motion.div
            className="text-center mb-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-2">Get Involved</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3C2E]">
              Everything in One Place
            </h2>
          </motion.div>
        </div>
        <GetInvolved />
      </div>

      {/* Announcements */}
      <section className="py-20 px-4 sm:px-6 bg-[#F5F0E8]">
        {/* Top wave */}
        <div className="-mt-20 mb-12" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 C360 60 1080 60 1440 0 L1440 60 L0 60 Z" fill="#F5F0E8" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-end justify-between mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-2">Latest News</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3C2E]">Announcements</h2>
            </div>
            <Link to="/events" className="hidden sm:flex items-center gap-1 text-[#1A3C2E] text-sm font-medium hover:text-[#C9A84C] transition-colors">
              View all <ChevronRight size={16} />
            </Link>
          </motion.div>

          {/* Featured announcement — summer events highlight */}
          <motion.div
            className="mb-6 rounded-2xl bg-[#C9A84C] p-6 flex flex-col sm:flex-row sm:items-center gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-white/25 text-white text-xs font-semibold mb-2">
                📣 Featured
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-1">Summer Events Calendar Now Available</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Stinson Park concerts, farmers markets, and neighborhood runs — all lined up for the season.
              </p>
            </div>
            <Link
              to="/events"
              className="shrink-0 px-5 py-2.5 rounded-full bg-white text-[#C9A84C] text-sm font-semibold hover:bg-[#F5F0E8] transition-colors duration-200"
            >
              View Calendar →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1A3C2E]/10 text-[#1A3C2E] text-xs font-semibold">
                    {item.tag}
                  </span>
                  <span className="text-[#2B2B2B]/40 text-xs">{item.date}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1A3C2E] mb-2 leading-snug">{item.title}</h3>
                <p className="text-[#2B2B2B]/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Highlights */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-2">Discover</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3C2E]">
              What Makes Elmwood Park Special
            </h2>
            <p className="text-[#2B2B2B]/60 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              From landmark architecture to a beloved park established in 1889, our neighborhood
              is one of Omaha's most storied communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.to}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
              >
                <Link
                  to={item.to}
                  className="group block border border-[#E8E0D0] rounded-2xl p-8 hover:border-[#C9A84C] hover:shadow-md transition-all duration-200"
                >
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h3 className="font-serif text-xl font-semibold text-[#1A3C2E] mb-2 group-hover:text-[#C9A84C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#2B2B2B]/60 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <span className="flex items-center gap-1 text-[#C9A84C] text-sm font-medium">
                    Explore <ChevronRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Teaser */}
      <section className="relative overflow-hidden bg-[#1A3C2E] py-20 px-4 sm:px-6">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(ellipse at 70% 50%, #C9A84C 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-4">Est. 1889</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              "A wild and romantic place…<br />
              <span className="text-[#C9A84C]">the largest forest trees</span> in the region."
            </h2>
            <p className="text-white/60 text-sm mb-2">— Omaha Bee, describing Elmwood Park at its founding</p>
            <p className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed mt-6 mb-8">
              Developed in the 1880s, Elmwood Park became home to Colonial, Georgian, and Tudor Revival
              residences. The park itself — designed by H.W.S. Cleveland — grew to over 216 acres and
              shaped the city's parks and boulevard system for generations.
            </p>
            <Link
              to="/history"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#C9A84C] text-[#C9A84C] rounded-full font-medium text-sm hover:bg-[#C9A84C] hover:text-white transition-all duration-200"
            >
              Read the Full History <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-20 px-4 sm:px-6 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-3">Support Your Neighborhood</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3C2E] mb-4">
              Help Us Preserve & Beautify Elmwood Park
            </h2>
            <p className="text-[#2B2B2B]/60 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Your donations fund landscaping improvements, community events, historic preservation,
              and the programs that make our neighborhood a wonderful place to live.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/donate"
                className="px-7 py-3.5 bg-[#C9A84C] hover:bg-[#b8963e] text-white font-semibold rounded-full transition-all duration-200 shadow-md"
              >
                Donate Now
              </Link>
              <Link
                to="/membership"
                className="px-7 py-3.5 border border-[#1A3C2E] text-[#1A3C2E] font-medium rounded-full hover:bg-[#1A3C2E] hover:text-white transition-all duration-200"
              >
                Become a Member
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
