import { useEffect, useRef } from 'react'

// useEffect 사용 시, init 할때가 아닌 값이 변화할때만 이용하고 싶을때 이 API 를 사용하시면 됩니다.

export default function(effect, deps) {
  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current) {
      const unmount = effect()
      return () => {
        // mounted.current = false
        unmount && unmount()
      }
    } else {
      mounted.current = true
    }
  }, deps)
}
