import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ComingSoon from './pages/ComingSoon'

const stubs = [
  { path: '/history', title: 'Neighborhood History', desc: 'Explore 130+ years of Elmwood Park — from its 1889 founding to the vibrant community it is today.' },
  { path: '/architecture', title: 'Architecture & Homes', desc: 'A gallery of the Colonial, Georgian, and Tudor Revival homes that line our historic streets.' },
  { path: '/events', title: 'Events & Community Calendar', desc: 'Farmers markets, Stinson Park concerts, community runs, and more — all in one place.' },
  { path: '/directory', title: 'Business Directory', desc: 'Discover local businesses in Aksarben Village and the Stinson area.' },
  { path: '/membership', title: 'Membership', desc: 'Join EPNA and help shape the future of Elmwood Park.' },
  { path: '/donate', title: 'Donations', desc: 'Support neighborhood beautification, events, and historic preservation.' },
  { path: '/documents', title: 'Meeting Minutes & Documents', desc: 'Access archived meeting minutes, newsletters, and neighborhood documents.' },
  { path: '/projects', title: 'Special Projects', desc: 'Dodge Street landscaping, Howard Hill initiatives, and other beautification efforts.' },
  { path: '/gallery', title: 'Photo Gallery', desc: 'Historic and modern photography of Elmwood Park — homes, events, and the park itself.' },
]

export default function App() {
  return (
    <BrowserRouter basename="/EPNA_website">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {stubs.map(({ path, title, desc }) => (
            <Route
              key={path}
              path={path}
              element={<ComingSoon title={title} description={desc} />}
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
