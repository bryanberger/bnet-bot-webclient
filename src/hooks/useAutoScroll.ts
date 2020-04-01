import { useEffect, useRef } from 'react'

import useRafState from './useRafState'

export interface State {
  y: number
  dirty: boolean
  isBottom: boolean
}

const useAutoScroll = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useRafState<State>({
    y: 0,
    dirty: false,
    isBottom: false,
  })

  useEffect(() => {
    const refCurrent = ref.current

    const handler = () => {
      console.log('handler')
      if (refCurrent) {
        setState({
          y: refCurrent.scrollTop,
          isBottom:
            refCurrent.scrollHeight - refCurrent.clientHeight ===
            refCurrent.scrollTop,
          dirty: true,
        })
      }
    }

    if (refCurrent) {
      refCurrent.addEventListener('scroll', handler, {
        capture: false,
        passive: true,
      })
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('scroll', handler)
      }
    }
  }, [ref, setState])

  useEffect(() => {
    if (ref.current) {
      if (state.isBottom || !state.dirty) {
        ref.current.scrollTop =
          ref.current.scrollHeight - ref.current.clientHeight
      }
    }
  })

  return ref
}

export default useAutoScroll
