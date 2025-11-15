import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Countdown from '../components/Countdown.jsx'

export default function MainPage() {
  const navigate = useNavigate()
  const goSemester = (n) => () => navigate(`/semester/${n}`)
  return (
    <>
      <marquee className="marquee">Notes have been updated, the website will be disabled during the final exams</marquee>

      <section>
        <div className="welcometext_frame">
          <h1 className="themeText">Welcome to vimis22.github.io</h1>
          <p className="themeText">Please access tasks from different semesters subjects, by clicking on the number-palettes.</p>
          <div className="deadline_box">
            <p className="themeText">Pages closes on the 31st of December 2025, before all Exams.</p>
            <Countdown deadline="2025-12-31" />
          </div>
        </div>
        <div className="semesterframe">
          <button onClick={goSemester(1)} className="mainpage_semesterbuttons custom-button">1</button>
          <button onClick={goSemester(2)} className="mainpage_semesterbuttons custom-button">2</button>
          <button onClick={goSemester(3)} className="mainpage_semesterbuttons custom-button">3</button>
          <button onClick={goSemester(4)} className="mainpage_semesterbuttons custom-button">4</button>
          <button onClick={goSemester(5)} className="mainpage_semesterbuttons custom-button">5</button>
          <button onClick={goSemester(6)} className="mainpage_semesterbuttons custom-button">6</button>
        </div>
      </section>
    </>
  )
}
