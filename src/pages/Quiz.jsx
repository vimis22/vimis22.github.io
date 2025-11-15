import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { checkAnswer } from '../hooks/useQuizChecker'

function QuizQuestion({ number, question, choices }) {
  const [selected, setSelected] = useState('')
  return (
    <div className="questionbox">
      <p className="themeText">{question}</p>
      {choices.map((c) => (
        <label key={c.value} style={{ marginRight: 10 }} className="themeText">
          <input
            type="radio"
            name={`choice${number}`}
            value={c.value}
            checked={selected === c.value}
            onChange={(e) => setSelected(e.target.value)}
          />{' '}
          {c.label}
        </label>
      ))}
      <div>
        <button className="navbar_buttons custom-button" onClick={() => checkAnswer(number, selected)}>
          Check Answer
        </button>
      </div>
    </div>
  )
}

export default function Quiz() {
  return (
    <>
      <marquee className="marquee">This website is under renovation construction.</marquee>

      <div className="welcometext_frame">
        <h1 className="themeText">Quiz-Page</h1>
        <p className="themeText">Here are examples of Quizes, that can help the students for the final exam.</p>
      </div>

      <section className="semesterframe quizframe">
        <Link to="/quizmath" className="subject custom-button">Mathematics 1</Link>
        <Link to="/quizmath" className="subject custom-button">Operative and Distributed Systems</Link>
        <Link to="/quizmath" className="subject custom-button">Programming</Link>
      </section>

      <section className="semesterframe quizframe" style={{ marginTop: 30 }}>
        <QuizQuestion
          number={1}
          question="What is 2 + 2?"
          choices={[
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
          ]}
        />
        <QuizQuestion
          number={2}
          question="What is 4 + 4?"
          choices={[
            { value: '6', label: '6' },
            { value: '8', label: '8' },
            { value: '10', label: '10' },
          ]}
        />
      </section>
    </>
  )
}
