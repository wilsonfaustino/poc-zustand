import type { StoreSlice } from '../store'

type CounterStore = {
  count: number
}

type CounterActions = {
  increment: () => void
  decrement: () => void
}

export type CounterSlice = CounterStore & CounterActions

export const createCounterSlice: StoreSlice<CounterSlice> = (set) => ({
  count: 0,
  increment: () =>
    set((prevState) => {
      prevState.counter.count++
    }),
  decrement: () =>
    set((prevState) => {
      prevState.counter.count--
    }),
})
