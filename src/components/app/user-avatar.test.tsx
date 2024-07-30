import { render, screen, waitFor } from '@testing-library/react'

import { UserAvatar } from '@/components/app/user-avatar'

describe('UserAvatar', () => {
  const orignalGlobalImage = window.Image

  beforeAll(() => {
    ;(window.Image as any) = class MockImage {
      onload: () => void = () => {}
      src: string = ''
      constructor() {
        setTimeout(() => {
          this.onload()
        }, 300)

        return this
      }
    }
  })
  afterAll(() => {
    window.Image = orignalGlobalImage
  })
  it('should render the user avatar with the correct URL', async () => {
    render(<UserAvatar userName="wilsonfaustino" />)

    await waitFor(
      () => {
        expect(screen.getByAltText('Avatar @wilsonfaustino')).toBeInTheDocument()
        expect(screen.getByAltText('Avatar @wilsonfaustino')).toHaveAttribute(
          'src',
          'https://github.com/wilsonfaustino.png'
        )
      },
      { timeout: 1500 }
    )
  })

  it('should render the fallback text when the user is not found', () => {
    const { getByText } = render(<UserAvatar />)

    const fallbackText = getByText('404')

    expect(fallbackText).toBeInTheDocument()
  })
})
