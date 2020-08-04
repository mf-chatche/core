import { useEffect } from "react"

export const useEventListener = (eventName, callback) => {
  useEffect(() => {
    window.addEventListener(eventName, ({ detail }) => callback(detail))
  
    return () => {
      window.removeEventListener(eventName, ({ detail }) => callback(detail))
    }
  }, [])
}