import { useEffect, useCallback } from 'react'
import { isClient } from './util'

const useBeforeUnload = (
  enabled: boolean | (() => boolean) = true,
  message?: string,
) => {
  const handler = useCallback(
    (event: BeforeUnloadEvent) => {
      const finalEnabled = typeof enabled === 'function' ? enabled() : true

      if (!finalEnabled) {
        return
      }

      event.preventDefault()

      if (message) {
        event.returnValue = message
      }

      return message
    },
    [enabled, message],
  )

  useEffect(() => {
    if (!enabled || !isClient) {
      return
    }

    window.addEventListener('beforeunload', handler)

    return () => window.removeEventListener('beforeunload', handler)
  }, [enabled, handler])
}

export default useBeforeUnload
