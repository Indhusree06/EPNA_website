import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Sprout, Home, TreePine, Users, Star } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const pillars = [
  {
    icon: Home,
    title: 'Preserve Architecture',
    desc: 'Championing the Colonial, Georgian, and Tudor Revival homes that define our streets and reflect over a century of careful craftsmanship.',
  },
  {
    icon: TreePine,
    title: 'Beautify & Sustain',
    desc: 'From Dodge Street landscaping projects to park improvements, we invest in the natural and built environment of our neighborhood.',
  },
  {
    icon: Users,
    title: 'Build Community',
    desc: 'Organizing events, fostering connections among neighbors, and welcoming new residents into the fabric of Elmwood Park.',
  },
  {
    icon: Star,
    title: 'Support Local Business',
    desc: 'Promoting the vibrant shops, restaurants, and services in Aksarben Village and the Stinson area that make our community thrive.',
  },
]

const projects = [
  {
    title: 'Dodge Street Landscaping',
    status: 'Active',
    desc: 'Multi-phase beautification along our primary corridor, adding greenery, lighting, and cohesive streetscape elements.',
    color: 'border-l-[#1A3C2E]',
  },
  {
    title: 'Howard Hill Initiative',
    status: 'Active',
    desc: 'Neighborhood improvement and community engagement efforts centered around the Howard Hill area and surrounding blocks.',
    color: 'border-l-[#C9A84C]',
  },
  {
    title: 'Architecture Documentation',
    status: 'In Progress',
    desc: 'Photographing and cataloging the historic homes of Elmwood Park — beginning with 67th Street between Leavenworth and Pacific.',
    color: 'border-l-[#2D5A44]',
  },
  {
    title: 'Historical Preservation',
    status: 'Ongoing',
    desc: 'Collecting oral histories, photographs, maps, and archived materials to maintain a living record of our neighborhood.',
    color: 'border-l-[#3D2B1A]',
  },
]

const leadership = [
  { name: 'Diana', role: 'Membership & Outreach', initial: 'D' },
  { name: 'Lisa Bockman', role: 'Marketing Director – Stinson Park', initial: 'L' },
  { name: 'Kylie Feilmeier', role: 'Farmers Market Coordinator', initial: 'K' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-[#1A3C2E] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(ellipse at 30% 60%, #C9A84C 0%, transparent 55%)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-4"
            variants={fadeUp} initial="hidden" animate="show" custom={0}
          >
            Who We Are
          </motion.p>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            variants={fadeUp} initial="hidden" animate="show" custom={1}
          >
            About EPNA
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp} initial="hidden" animate="show" custom={2}
          >
            The Elmwood Park Neighborhood Association is a community-driven organization
            dedicated to preserving the character, history, and quality of life in one
            of Omaha's most storied neighborhoods.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-3">Our Mission</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3C2E] mb-6 leading-tight">
                A neighborhood worth knowing, worth protecting.
              </h2>
              <p className="text-[#2B2B2B]/70 text-base leading-relaxed mb-4">
                EPNA was formed to give residents a unified voice in shaping the future of Elmwood Park —
                and to honor the neighborhood's remarkable past. Bounded by 72nd and 67th Streets,
                and Dodge and Pacific Streets, our community is a pocket of architectural and cultural
                significance in the heart of Omaha.
              </p>
              <p className="text-[#2B2B2B]/70 text-base leading-relaxed mb-8">
                We work on beautification projects, organize community events, maintain business
                connections, and ensure that the history of this neighborhood is documented and
                celebrated for future generations.
              </p>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A3C2E] text-white rounded-full text-sm font-medium hover:bg-[#2D5A44] transition-colors duration-200"
              >
                Join the Association <ChevronRight size={16} />
              </Link>
            </motion.div>

            {/* Visual stat block */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
            >
              {[
                { num: '1889', label: 'Year Elmwood Park was founded', sub: '136 years of history' },
                { num: '216', label: 'Acres in the park', sub: 'Second largest in Omaha by 1917' },
                { num: '67–72', label: 'Street range', sub: 'Dodge St to Pacific St' },
                { num: '100+', label: 'Years of architecture', sub: 'Colonial, Georgian & Tudor Revival' },
              ].map((stat, i) => (
                <div key={i} className={`rounded-2xl p-6 ${i % 2 === 0 ? 'bg-[#F5F0E8]' : 'bg-[#1A3C2E]'}`}>
                  <p className={`font-serif text-3xl font-bold mb-1 ${i % 2 === 0 ? 'text-[#1A3C2E]' : 'text-[#C9A84C]'}`}>
                    {stat.num}
                  </p>
                  <p className={`text-sm font-medium mb-1 ${i % 2 === 0 ? 'text-[#1A3C2E]' : 'text-white'}`}>
                    {stat.label}
                  </p>
                  <p className={`text-xs ${i % 2 === 0 ? 'text-[#2B2B2B]/50' : 'text-white/50'}`}>
                    {stat.sub}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-4 sm:px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-2">What We Stand For</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3C2E]">Our Core Focus Areas</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200"
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A3C2E]/8 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#1A3C2E]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1A3C2E] mb-2">{title}</h3>
                <p className="text-[#2B2B2B]/60 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-end justify-between mb-10"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <div>
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-2">What We're Working On</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3C2E]">Active Projects</h2>
            </div>
            <Link to="/projects" className="hidden sm:flex items-center gap-1 text-[#1A3C2E] text-sm font-medium hover:text-[#C9A84C] transition-colors">
              All projects <ChevronRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                className={`border-l-4 ${p.color} bg-[#F5F0E8] rounded-r-2xl p-6`}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif font-semibold text-lg text-[#1A3C2E]">{p.title}</h3>
                  <span className="text-xs bg-[#1A3C2E]/10 text-[#1A3C2E] px-3 py-1 rounded-full font-medium">
                    {p.status}
                  </span>
                </div>
                <p className="text-[#2B2B2B]/60 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Boundaries */}
      <section className="py-20 px-4 sm:px-6 bg-[#1A3C2E]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-4">Neighborhood Boundaries</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">Our Corner of Omaha</h2>
            <p className="text-white/60 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
              EPNA represents the residential area bounded by these four streets in the heart of Midtown Omaha.
            </p>
            <div className="inline-grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden text-left">
              {[
                ['West Boundary', '72nd Street'],
                ['East Boundary', '67th Street'],
                ['North Boundary', 'Dodge Street'],
                ['South Boundary', 'Pacific Street'],
              ].map(([label, val]) => (
                <div key={label} className="bg-[#1A3C2E] px-8 py-5">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-white font-semibold text-lg font-serif">{val}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="https://www.google.com/maps/@41.2503,-96.0175,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full text-sm hover:bg-white/10 transition-all duration-200"
              >
                View on Google Maps <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 sm:px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-2">The People Behind EPNA</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3C2E]">Key Contacts</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                className="bg-white rounded-2xl p-8 shadow-sm text-center w-64"
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              >
                <div className="w-16 h-16 rounded-full bg-[#1A3C2E] flex items-center justify-center text-white font-serif text-2xl font-bold mx-auto mb-4">
                  {person.initial}
                </div>
                <h3 className="font-semibold text-[#1A3C2E] text-base mb-1">{person.name}</h3>
                <p className="text-[#2B2B2B]/50 text-xs leading-relaxed">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
