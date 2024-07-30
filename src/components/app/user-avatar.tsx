import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface UserAvatarProps {
  userName?: string
}

export const UserAvatar = ({ userName }: UserAvatarProps) => {
  return (
    <Avatar className="size-40">
      <AvatarImage src={`https://github.com/${userName}.png`} alt={`Avatar @${userName}`} />
      <AvatarFallback className="text-5xl">404</AvatarFallback>
    </Avatar>
  )
}
