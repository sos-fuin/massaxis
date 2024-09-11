'use client'
import { useAppDispatch, useAppSelector } from '@/store'
import { increment } from '@/store/features/counter/counterSlice'
import './test.scss'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="counter">
      <p>{count}</p>
      <button className="btn-scss" onClick={() => dispatch(increment())}>
        Incremt
      </button>
    </div>
  )
}
