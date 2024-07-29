import { produce } from 'immer'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { createCounterSlice } from './slices/counter'
import { createUserSlice } from './slices/user'
import type { Store } from './store'

export const useStore = create<Store>()(
  // Enable Redux DevTools
  devtools(
    // Persist the store in the sessionStorage
    persist(
      // Enable Immer to mutate the store
      immer((...params) => ({
        counter: createCounterSlice(...params),
        user: createUserSlice(...params),
      })),
      {
        name: '@dotzero:store',
        storage: createJSONStorage(() => sessionStorage),
        merge: (persistedState, currentState) =>
          produce(currentState, (draft) => {
            Object.entries(draft).forEach(([key, initialSliceValue]) => {
              const typesafeKey = key as keyof typeof persistedState
              const persistedSliceValue = (persistedState as Store)[typesafeKey]

              Object.assign(initialSliceValue, persistedSliceValue)
            })
          }),
      }
    ),
    { /* enabled: import.meta.env.DEV, */ name: 'Conecte Store', store: 'global' }
  )
)
