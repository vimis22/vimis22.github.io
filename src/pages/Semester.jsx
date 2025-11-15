import React from 'react'
import { Link, useParams } from 'react-router-dom'

function SemesterContent({ id }) {
  if (id === '1') {
    return (
      <>
        <div className="welcometext_frame">
          <h1 className="themeText">Semester 1</h1>
          <p className="themeText">Please visit a Subject.</p>
        </div>
        <section className="semesterframe quizframe">
          <a href="#" className="subject custom-button">Computer Science</a>
          <a href="#" className="subject custom-button">Statistical Data Analyze</a>
          <a href="#" className="subject custom-button">Objectoriented Programming</a>
        </section>
      </>
    )
  }
  if (id === '2') {
    return (
      <>
        <div className="welcometext_frame">
          <h1 className="themeText">Semester 2</h1>
          <p className="themeText">Please visit a Subject.</p>
        </div>
        <section className="semesterframe quizframe">
          <a href="#" className="subject custom-button">Algorithms & Data Structures</a>
          <a href="#" className="subject custom-button">Discrete Mathematics</a>
          <a href="#" className="subject custom-button">Calculus & Linear Algebra</a>
        </section>
      </>
    )
  }
  return (
    <div className="welcometext_frame">
      <h1 className="themeText">Semester {id}</h1>
      <p className="themeText">Content coming soon.</p>
    </div>
  )
}

export default function Semester() {
  const { id } = useParams()
  return (
    <>
      <marquee className="marquee">This website is under renovation construction.</marquee>
      <SemesterContent id={id} />
    </>
  )
}
