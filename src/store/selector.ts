import { selector } from 'recoil'
import { UserInfo, getUserInfo } from '../api/login'
import { tokenState } from './atom'

export const userInfoState = selector<UserInfo | undefined>({
  key: 'userInfoState',
  get: async ({ get }) => {
    try {
      const token = get(tokenState)
      if (token) {
        const { data } = await getUserInfo()
        return data
      }
      return undefined
    } catch (error) {
      console.error(error)
      return undefined
    }
  },
})
