import '@testing-library/jest-dom'

import { fireEvent, render } from '@testing-library/react'

import { useStore } from '@/app/store'

import { Counter } from './counter'

describe('Counter', () => {
  it('should render the counter component', () => {
    const { getByText } = render(<Counter />)

    expect(getByText('Contador:')).toBeInTheDocument()
  })

  it('should increment the counter when the increment button is clicked', () => {
    const { getByText, getByTestId } = render(<Counter />)
    const incrementButton = getByText('Incrementar')
    const counterDisplay = getByTestId('counter-display')

    fireEvent.click(incrementButton)

    expect(counterDisplay).toHaveTextContent('1')
  })

  it('should decrement the counter when the decrement button is clicked', () => {
    const { getByText } = render(<Counter />)
    const decrementButton = getByText('Decrementar')

    fireEvent.click(decrementButton)

    expect(useStore.getState().counter.count).toBe(-1)
  })
})
