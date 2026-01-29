import { useEffect, useState } from 'react'

// Simple hook converted from countdown_days.js
export default function useCountdown(deadlineDate) {
  const [days, setDays] = useState(null)

  useEffect(() => {
    const updateCountdown = () => {
      const deadline = new Date(deadlineDate)
      const today = new Date()
      const diff = deadline - today
      const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24))
      setDays(daysRemaining)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000 * 60 * 60) // Update every hour

    return () => clearInterval(interval)
  }, [deadlineDate])

  return days
}
