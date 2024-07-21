import { useShallow } from 'zustand/react/shallow'

import { useStore } from '@/app/store'

import { Avatar, AvatarImage } from '../ui/avatar'

export const UserAvatar = () => {
  const { user } = useStore(
    useShallow((state) => ({
      user: state.user.data.userName,
    }))
  )

  return (
    <Avatar className="size-40">
      <AvatarImage src={`https://github.com/${user}.png`} alt={`Avatar @${user}`} />
    </Avatar>
  )
}
