import { useShallow } from 'zustand/react/shallow'

import { useStore } from '@/app/store'

import { Button } from '../ui/button'
import { CounterDisplay } from '../ui/counter-display'

export const Counter = () => {
  const counter = useStore(
    useShallow((state) => ({
      count: state.counter.count,
      increment: state.counter.increment,
      decrement: state.counter.decrement,
    }))
  )

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Contador:</h1>
        <CounterDisplay value={counter.count} />
      </div>
      <div className="space-x-3">
        <Button type="button" onClick={counter.increment}>
          Incrementar
        </Button>
        <Button type="button" onClick={counter.decrement}>
          Decrementar
        </Button>
      </div>
    </div>
  )
}
