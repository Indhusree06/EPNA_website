import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const contacts = [
  {
    name: 'Lisa Bockman',
    role: 'Marketing Director – Stinson Park',
    email: 'lisa@noddlecompanies.com',
    phone: '(402) 496-1616',
    topics: ['Business directory info', 'Stinson Park events', 'Concerts & community runs'],
    initial: 'L',
  },
  {
    name: 'Kylie Feilmeier',
    role: 'Farmers Market Coordinator',
    email: null,
    phone: null,
    topics: ['Farmers market schedules', 'Event coordination contacts'],
    initial: 'K',
  },
  {
    name: 'EPNA General',
    role: 'Neighborhood Association',
    email: 'info@epna-omaha.org',
    phone: null,
    topics: ['Membership questions', 'Donations', 'General inquiries'],
    initial: 'E',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, hook this up to a form service (Formspree, Netlify Forms, etc.)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-[#1A3C2E] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(ellipse at 70% 40%, #C9A84C 0%, transparent 55%)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p
            className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-4"
            variants={fadeUp} initial="hidden" animate="show" custom={0}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
            variants={fadeUp} initial="hidden" animate="show" custom={1}
          >
            Contact EPNA
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg leading-relaxed"
            variants={fadeUp} initial="hidden" animate="show" custom={2}
          >
            Questions, ideas, or want to get involved? We'd love to hear from you.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl font-bold text-[#1A3C2E] mb-6">Send a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={48} className="text-[#1A3C2E] mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-[#1A3C2E] mb-2">Message Sent!</h3>
                  <p className="text-[#2B2B2B]/60 text-sm">
                    Thank you for reaching out. We'll be in touch shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 text-sm text-[#C9A84C] underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B2B2B]/60 uppercase tracking-wide mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] text-[#2B2B2B] text-sm placeholder-[#2B2B2B]/30 focus:outline-none focus:border-[#1A3C2E] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2B2B2B]/60 uppercase tracking-wide mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] text-[#2B2B2B] text-sm placeholder-[#2B2B2B]/30 focus:outline-none focus:border-[#1A3C2E] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2B2B2B]/60 uppercase tracking-wide mb-1.5">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] text-[#2B2B2B] text-sm focus:outline-none focus:border-[#1A3C2E] transition-colors"
                    >
                      <option value="">Select a topic…</option>
                      <option>Membership Inquiry</option>
                      <option>Donation Information</option>
                      <option>Events & Calendar</option>
                      <option>Architecture / Home Feature</option>
                      <option>Business Directory</option>
                      <option>Special Projects</option>
                      <option>General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2B2B2B]/60 uppercase tracking-wide mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind…"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] text-[#2B2B2B] text-sm placeholder-[#2B2B2B]/30 focus:outline-none focus:border-[#1A3C2E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1A3C2E] hover:bg-[#2D5A44] text-white font-semibold rounded-xl transition-colors duration-200"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info panel */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
            >
              <h2 className="font-serif text-2xl font-bold text-[#1A3C2E] mb-6">Key Contacts</h2>
              <div className="space-y-5">
                {contacts.map((c, i) => (
                  <div key={i} className="bg-[#F5F0E8] rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1A3C2E] flex items-center justify-center text-white font-serif text-lg font-bold shrink-0">
                        {c.initial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[#1A3C2E] text-base">{c.name}</h3>
                        <p className="text-[#2B2B2B]/50 text-xs mb-3">{c.role}</p>
                        <div className="space-y-1.5">
                          {c.email && (
                            <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-sm text-[#1A3C2E] hover:text-[#C9A84C] transition-colors">
                              <Mail size={13} className="text-[#C9A84C]" />
                              {c.email}
                            </a>
                          )}
                          {c.phone && (
                            <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-sm text-[#1A3C2E] hover:text-[#C9A84C] transition-colors">
                              <Phone size={13} className="text-[#C9A84C]" />
                              {c.phone}
                            </a>
                          )}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {c.topics.map(t => (
                            <span key={t} className="text-xs bg-white text-[#1A3C2E]/60 px-2.5 py-1 rounded-full border border-[#E8E0D0]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 sm:px-6 bg-[#F5F0E8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-2">Find Us</p>
            <h2 className="font-serif text-3xl font-bold text-[#1A3C2E]">Neighborhood Location</h2>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
          >
            {/* Map embed */}
            <iframe
              title="Elmwood Park Neighborhood Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12072.5!2d-96.0175!3d41.2503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8793f22fc26c1b2b%3A0x1a2b3c4d5e6f7a8b!2sElmwood%20Park%2C%20Omaha%2C%20NE!5e0!3m2!1sen!2sus!4v1680000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#C9A84C] shrink-0" />
                <div>
                  <p className="font-semibold text-[#1A3C2E] text-sm">Elmwood Park Neighborhood</p>
                  <p className="text-[#2B2B2B]/50 text-xs">72nd–67th Street · Dodge–Pacific Street · Omaha, NE</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/@41.2503,-96.0175,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:ml-auto text-sm text-[#C9A84C] font-medium hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
