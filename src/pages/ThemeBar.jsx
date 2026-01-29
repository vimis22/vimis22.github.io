import React, { useRef } from 'react'
import useTheme from '../hooks/useTheme'

export default function ThemeBar() {
  const { activateTheme, setTheme } = useTheme()
  const backRef = useRef(null)
  const textRef = useRef(null)

  const onApply = () => {
    const back = backRef.current?.value || '#000000'
    const text = textRef.current?.value || '#ffffff'
    setTheme([back, text])
  }

  return (
    <>
      <marquee className="marquee">This website is under renovation construction.</marquee>

      <section>
        <div className="colorbox_placement">
          <p className="introduction themeText">Please choose a background color:</p>
          <input type="color" className="colorbox" id="backgroundpicker" defaultValue="#000000" ref={backRef} />
          <p className="introduction themeText">Please choose a text color:</p>
          <input type="color" className="colorbox" id="textpicker" defaultValue="#ffffff" ref={textRef} />
          <button id="colorized_button" className="access_buttons themebutton navbar_buttons custom-button" onClick={onApply}>
            Change Theme Colors
          </button>
        </div>

        <div className="colorbox_placement" style={{ marginTop: 20 }}>
          <p className="themeText introduction">You can also choose between two default themes:</p>
          <select className="access_buttons" id="themeSelect" onChange={(e) => activateTheme(e.target.value)}>
            <option value="light" className="themeBack themeText">light</option>
            <option value="dark" className="themeBack themeText">dark</option>
          </select>
        </div>
      </section>
    </>
  )
}
