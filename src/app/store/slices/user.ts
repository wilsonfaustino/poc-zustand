import type { StoreSlice } from '../store'

type UserStore = {
  data: {
    name: string
    email: string
    userName: string
  }
}

type UserActions = {
  setUserName: (userName: string) => void
}

export type UserSlice = UserStore & UserActions

export const createUserSlice: StoreSlice<UserSlice> = (set) => ({
  data: {
    name: 'Wilson Faustino',
    email: 'wilson.rfaustino@gmail.com',
    userName: 'wilsonfaustino',
  },

  setUserName: (userName) =>
    set((prevState) => {
      prevState.user.data.userName = userName
    }),
})
