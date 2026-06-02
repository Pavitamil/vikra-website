import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1)
      
      const scrollToElement = () => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return true
        }
        return false
      }

      // Try immediately
      if (!scrollToElement()) {
        let attempts = 0
        const interval = setInterval(() => {
          attempts++
          if (scrollToElement() || attempts > 10) {
            clearInterval(interval)
          }
        }, 100)
        return () => clearInterval(interval)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
