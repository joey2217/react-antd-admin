import React, { memo, PropsWithChildren, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { Skeleton } from 'antd'
import { tokenState, userInfoState } from '../store/atom'
import { getUserInfo } from '../api/login'

const RequireAuth: React.FC<PropsWithChildren> = ({ children }) => {
  const token = useRecoilValue(tokenState)
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const location = useLocation()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!userInfo) {
      if (token) {
        setLoading(true)
        getUserInfo()
          .then((res) => {
            const { data } = res
            setUserInfo(data)
          })
          .catch((error) => {
            console.error(error)
            navigate('/login', {
              state: { from: location },
              replace: true,
            })
          })
          .finally(() => {
            setLoading(false)
          })
      } else {
        navigate('/login', {
          state: { from: location },
          replace: true,
        })
      }
    }
  }, [location, navigate, setUserInfo, token, userInfo])

  if (loading) {
    return <Skeleton active />
  }

  return <>{children}</>
}

export default memo(RequireAuth)
