import React from 'react'
import useCountdown from '../hooks/useCountdown'

export default function Countdown({ deadline = '2025-12-31' }) {
  const days = useCountdown(deadline)
  return (
    <div id="countdown">{days !== null ? `Days remaining: ${days}` : ''}</div>
  )
}
