import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TreePine } from 'lucide-react'

export default function ComingSoon({ title, description }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0E8] px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <TreePine size={40} className="text-[#1A3C2E] mx-auto mb-6" />
        <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium mb-3">Coming Soon</p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A3C2E] mb-4">{title}</h1>
        <p className="text-[#2B2B2B]/60 text-sm leading-relaxed mb-8">
          {description || 'This section is being built. Check back soon for updates from the Elmwood Park Neighborhood Association.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A3C2E] text-white rounded-full text-sm font-medium hover:bg-[#2D5A44] transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
