import { useState, useEffect } from 'react'
import { fetchModule } from './sanity'

export function useSanityModule<T = any>(moduleType: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false

    fetchModule(moduleType)
      .then((result) => {
        if (!cancelled) {
          setData(result)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.warn(`CMS module "${moduleType}" not loaded, using fallback:`, err)
          setError(err)
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [moduleType])

  return { data, loading, error }
}
