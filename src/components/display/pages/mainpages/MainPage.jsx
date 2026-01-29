import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Countdown from '../components/Countdown.jsx'

export default function MainPage() {
  const navigate = useNavigate()
  const goSemester = (n) => () => navigate(`/semester/${n}`)
  return (
    <>
      <marquee className="marquee">Notes have been updated, the website will be disabled during the final exams</marquee>

      <section className="main-content">
        <div className="welcometext_frame">
          <h1>Welcome to vimis22.github.io</h1>
          <p>Please access tasks from different semesters subjects, by clicking on the number-palettes.</p>
          <div className="deadline_box">
            <p>Pages closes on the 1st of June 2026, before all Exams.</p>
            <Countdown deadline="2026-06-01" />
          </div>
        </div>
        <div className="semesterframe">
          <button onClick={goSemester(1)} className="mainpage_semesterbuttons">1</button>
          <button onClick={goSemester(2)} className="mainpage_semesterbuttons">2</button>
          <button onClick={goSemester(3)} className="mainpage_semesterbuttons">3</button>
          <button onClick={goSemester(4)} className="mainpage_semesterbuttons">4</button>
          <button onClick={goSemester(5)} className="mainpage_semesterbuttons">5</button>
          <button onClick={goSemester(6)} className="mainpage_semesterbuttons">6</button>
        </div>
      </section>
    </>
  )
}
