import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import MainPage from './pages/MainPage.jsx'
import ThemeBar from './pages/ThemeBar.jsx'
import Semester from './pages/Semester.jsx'
import About from './pages/About.jsx'
import useTheme from './hooks/useTheme'

export default function App() {
  // initialize theme from localStorage and apply styles
  useTheme()
  return (
    <div className="themeBack">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/themebar" element={<ThemeBar />} />
        <Route path="/semester/:id" element={<Semester />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
