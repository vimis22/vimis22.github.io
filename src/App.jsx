import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/elements/Navbar.jsx'
import MainPage from './components/display/pages/mainpages/MainPage.jsx'
import ThemeBar from './components/display/pages/mainpages/ThemeBar.jsx'
import Semester1 from './components/display/pages/semesterpages/Semester1.jsx'
import Semester2 from './components/display/pages/semesterpages/Semester2.jsx'
import Semester3 from './components/display/pages/semesterpages/Semester3.jsx'
import Semester4 from './components/display/pages/semesterpages/Semester4.jsx'
import Semester5 from './components/display/pages/semesterpages/Semester5.jsx'
import Semester6 from './components/display/pages/semesterpages/Semester6.jsx'
import About from './components/display/pages/mainpages/About.jsx'
import useTheme from './hooks/useTheme'

export default function App() {
  // initialize theme from localStorage and apply styles
  useTheme()
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/themebar" element={<ThemeBar />} />
        <Route path="/semester/1" element={<Semester1 />} />
        <Route path="/semester/2" element={<Semester2 />} />
        <Route path="/semester/3" element={<Semester3 />} />
        <Route path="/semester/4" element={<Semester4 />} />
        <Route path="/semester/5" element={<Semester5 />} />
        <Route path="/semester/6" element={<Semester6 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
