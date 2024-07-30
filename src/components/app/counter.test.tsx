import '@testing-library/jest-dom'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Counter } from './counter'

describe('Counter', () => {
  it('should render the counter component', async () => {
    render(<Counter />)

    await waitFor(
      () => {
        expect(screen.getByText('Contador:')).toBeInTheDocument()
        expect(screen.getAllByText(0)[0]).toHaveStyle({ transform: 'none' })
        expect(screen.getAllByText(0)[1]).toHaveStyle({ transform: 'none' })
        expect(screen.getAllByText(0)[2]).toHaveStyle({ transform: 'none' })
      },
      { timeout: 1500 }
    )
  })

  it('should increment the counter when the increment button is clicked', async () => {
    render(<Counter />)

    const incrementButton = screen.getByText('Incrementar')

    fireEvent.click(incrementButton)

    await waitFor(
      () => {
        expect(screen.getAllByText(1)[2]).toHaveStyle({ transform: 'none' })
      },
      { timeout: 1500 }
    )
  })

  it('should decrement the counter when the decrement button is clicked', async () => {
    render(<Counter />)

    const decrementButton = screen.getByText('Decrementar')

    fireEvent.click(decrementButton)

    await waitFor(
      () => {
        expect(screen.getAllByText(9)[0]).toHaveStyle({ transform: 'none' })
        expect(screen.getAllByText(9)[1]).toHaveStyle({ transform: 'none' })
        expect(screen.getAllByText(9)[2]).toHaveStyle({ transform: 'none' })
      },
      { timeout: 1500 }
    )
  })
})
