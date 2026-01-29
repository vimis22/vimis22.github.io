import React from 'react'
import useCountdown from '../hooks/useCountdown'

export default function Countdown({ deadline = '2026-06-01' }) {
  const days = useCountdown(deadline)
  return (
    <div id="countdown">{days !== null ? `Days remaining: ${days}` : ''}</div>
  )
}
