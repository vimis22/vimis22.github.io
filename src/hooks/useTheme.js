import { useCallback, useEffect, useMemo, useState } from 'react'

// Converted from themescript.js + themeselector.js
export default function useTheme() {
  const [theme, setThemeState] = useState(() => {
    const back = localStorage.getItem('themeBack') || 'default'
    const text = localStorage.getItem('themeText') || 'default'
    return [back, text]
  })

  const applyTheme = useCallback((arr) => {
    const textEls = document.getElementsByClassName('themeText')
    const backEls = document.getElementsByClassName('themeBack')
    for (let i = 0; i < textEls.length; i++) {
      textEls[i].style.color = arr[1]
    }
    for (let i = 0; i < backEls.length; i++) {
      backEls[i].style.backgroundColor = arr[0]
    }
  }, [])

  const setTheme = useCallback((arr) => {
    localStorage.setItem('themeBack', arr[0])
    localStorage.setItem('themeText', arr[1])
    setThemeState(arr)
    applyTheme(arr)
  }, [applyTheme])

  const activateTheme = useCallback((name) => {
    const light = ['white', 'black']
    const dark = ['black', 'white']
    if (name === 'light') setTheme(light)
    if (name === 'dark') setTheme(dark)
  }, [setTheme])

  useEffect(() => {
    if (theme[0] !== 'default' && theme[1] !== 'default') {
      applyTheme(theme)
    } else {
      // default: light to ensure global white background and dark text by default
      activateTheme('light')
    }
  }, [theme, applyTheme, activateTheme])

  return useMemo(() => ({ theme, setTheme, activateTheme }), [theme, setTheme, activateTheme])
}
