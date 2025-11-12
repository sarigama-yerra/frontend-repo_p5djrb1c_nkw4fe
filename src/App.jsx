import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-green-50 text-black">
      <Navbar />
      <main className="pt-20 pb-16">
        <Outlet />
      </main>
      <footer className="border-t border-black/10 py-8 text-center text-black/70">
        © {new Date().getFullYear()} Studio Odkhaan. All rights reserved.
      </footer>
    </div>
  )
}
