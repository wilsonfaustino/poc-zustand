import { Counter } from './components/app/counter'
import { UserAvatar } from './components/app/user-avatar'
import { UserForm } from './components/app/user-form'

export const App = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="space-y-10">
        <UserAvatar />
        <UserForm />
        <Counter />
      </div>
    </div>
  )
}
