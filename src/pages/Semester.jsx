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
          <a href="#" className="subject">Computer Science</a>
          <a href="#" className="subject">Statistical Data Analyze</a>
          <a href="#" className="subject">Objectoriented Programming</a>
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
          <a href="#" className="subject">Algorithms & Data Structures</a>
          <a href="#" className="subject">Discrete Mathematics</a>
          <a href="#" className="subject">Calculus & Linear Algebra</a>
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
      <section className="main-content">
        <SemesterContent id={id} />
      </section>
    </>
  )
}
