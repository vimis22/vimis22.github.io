import { useEffect, useState } from 'react'

// Simple hook converted from countdown_days.js
export default function useCountdown(deadlineDate) {
  const [days, setDays] = useState(null)

  useEffect(() => {
    const deadline = new Date(deadlineDate)
    const today = new Date()
    const diff = deadline - today
    const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24))
    setDays(daysRemaining)
  }, [deadlineDate])

  return days
}
