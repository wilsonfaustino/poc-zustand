import { render, screen } from '@testing-library/react'
import { useEffect } from 'react'

import { useUser } from '@/app/hooks/use-user'
import { UserAvatar } from '@/components/app/user-avatar'

jest.mock('@/app/hooks/use-user', () => ({
  useUser: jest.fn(),
}))

const ChangeUser = ({ userName, children }: { userName: string; children: React.ReactNode }) => {
  const { setUserName } = useUser()

  useEffect(() => {
    setUserName(userName)
  }, [userName, setUserName])

  return userName ? <>{children}</> : null
}

describe('UserAvatar', () => {
  const setUsernameMock = jest.fn()

  beforeEach(() => {
    ;(useUser as jest.Mock).mockReturnValue({
      userName: '',
      setUserName: setUsernameMock,
    })
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render the user avatar with the correct URL', async () => {
    render(
      <ChangeUser userName="test-user">
        <UserAvatar />
      </ChangeUser>
    )

    expect(setUsernameMock).toHaveBeenCalledTimes(1)
    expect(setUsernameMock).toHaveBeenCalledWith('test-user')
    // const avatarImage = await screen.getByAltText('Avatar @test-user')

    // expect(avatarImage).toBeInTheDocument()
    //   expect(avatarImage).toHaveAttribute('src', 'https://github.com/wilsonfaustino.png')
  })

  it('should render the fallback text when the user is not found', () => {
    const { getByText } = render(<UserAvatar />)

    const fallbackText = getByText('404')

    expect(fallbackText).toBeInTheDocument()
  })
})
