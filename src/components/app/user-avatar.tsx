import { useUser } from '@/app/hooks/use-user'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const UserAvatar = () => {
  const { userName } = useUser()

  return (
    <Avatar className="size-40">
      <AvatarImage src={`https://github.com/${userName}.png`} alt={`Avatar @${userName}`} />
      <AvatarFallback className="text-5xl">404</AvatarFallback>
    </Avatar>
  )
}
