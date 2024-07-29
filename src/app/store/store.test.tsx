import { render } from '@testing-library/react'
import type { ReactNode } from 'react'
import { useEffect } from 'react'

import { useStore } from './'
import type { Store } from './store'

jest.mock('zustand')

type TestComponentProps = {
  selector: (state: Partial<Store>) => unknown
  effect: (items: unknown) => void
  children?: ReactNode
}

export const TestComponent = ({ selector, effect, children }: TestComponentProps) => {
  const items = useStore(selector)

  useEffect(() => {
    effect(items)
  }, [items, effect])

  if (!children) return null

  return <>{children}</>
}

describe('Test Store', () => {
  it('should check if store renders correctly', () => {
    const selector = (state: Partial<Store>) => state.user?.data.userName
    const effect = jest.fn()

    render(<TestComponent selector={selector} effect={effect} />)

    expect(effect).toHaveBeenCalledTimes(1)
    expect(effect).toHaveBeenCalledWith('wilsonfaustino')
  })
  it('should change user in store', () => {
    const selector = (state: Partial<Store>) => ({
      userName: state.user?.data.userName,
      setUserName: state.user?.setUserName,
    })
    const effect = jest.fn().mockImplementation((items) => {
      items.setUserName('wilson')
    })

    render(<TestComponent selector={selector} effect={effect} />)

    expect(effect).toHaveBeenCalledTimes(2)
    expect(effect).toHaveBeenCalledWith(expect.objectContaining({ userName: 'wilson' }))
  })
})
