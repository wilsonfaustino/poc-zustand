import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useShallow } from 'zustand/react/shallow'

import { type User, userSchema } from '@/app/schemas/user'
import { useStore } from '@/app/store'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export const UserForm = () => {
  const user = useStore(
    useShallow((state) => ({
      name: state.user.data.userName,
      setUserName: state.user.setUserName,
    }))
  )
  const form = useForm<User>({
    defaultValues: {
      userName: user.name,
    },
    resolver: zodResolver(userSchema),
  })

  const onSubmit = form.handleSubmit((data) => {
    if (data.userName === user.name) return

    user.setUserName(data.userName)
  })

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-3">
        <Label htmlFor="userName">Nome do usuário</Label>
        <Input id="userName" {...form.register('userName')} />
        <ErrorMessage
          errors={form.formState.errors}
          name="userName"
          render={({ message }) => <small className="text-red-500">{message}</small>}
        />
      </div>
      <Button type="submit">Salvar</Button>
    </form>
  )
}
