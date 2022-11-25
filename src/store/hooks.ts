import { useRecoilValue } from 'recoil'
import { userInfoState } from './selector'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function useUserInfo() {
  const userInfo = useRecoilValue(userInfoState)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(userInfo);
    if (userInfo == null) {
      navigate('/login', { replace: true })
    }
  }, [navigate, userInfo])

  return userInfo
}
