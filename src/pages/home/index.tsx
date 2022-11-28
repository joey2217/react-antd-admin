import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '../../store/atom'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const userInfo = useRecoilValue(userInfoState)

  return (
    <div>
      <h2>{t('hello', { name: userInfo?.name })}</h2>
    </div>
  )
}

export default memo(Home)
