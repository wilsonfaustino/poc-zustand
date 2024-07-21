import type { StateCreator } from 'zustand'

import type { CounterSlice } from './slices/counter'
import type { UserSlice } from './slices/user'

export type Store = {
  counter: CounterSlice
  user: UserSlice
}

export type StoreSlice<TSlice> = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/persist', unknown], ['zustand/immer', never]],
  [],
  TSlice
>
