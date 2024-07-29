import { useShallow } from 'zustand/react/shallow'

import { useStore } from '../store'

export const useUser = () => {
  const { userName, setUserName } = useStore(
    useShallow((state) => ({
      userName: state.user.data.userName,
      setUserName: state.user.setUserName,
    }))
  )

  return { userName, setUserName }
}
