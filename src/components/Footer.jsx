import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1A3C2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-2">Elmwood Park</h3>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Neighborhood Association</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Preserving the history, architecture, and community spirit of Elmwood Park in Omaha, Nebraska.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['About EPNA', '/about'],
                ['Neighborhood History', '/history'],
                ['Architecture & Homes', '/architecture'],
                ['Events & Calendar', '/events'],
                ['Photo Gallery', '/gallery'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {[
                ['Membership', '/membership'],
                ['Donations', '/donate'],
                ['Business Directory', '/directory'],
                ['Special Projects', '/projects'],
                ['Meeting Minutes', '/documents'],
                ['Contact Us', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">Location</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#C9A84C]" />
                <span>72nd St to 67th St<br />Dodge St to Pacific St<br />Omaha, NE</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={16} className="shrink-0 text-[#C9A84C]" />
                <a href="mailto:info@epna-omaha.org" className="hover:text-[#C9A84C] transition-colors">
                  info@epna-omaha.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">© 2025 Elmwood Park Neighborhood Association. All rights reserved.</p>
          <p className="text-white/30 text-xs">
            History source:{' '}
            <a
              href="https://en.wikipedia.org/wiki/Elmwood_Park_(Omaha)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A84C] transition-colors"
            >
              Wikipedia – Elmwood Park (Omaha)
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
