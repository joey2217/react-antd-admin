import React from 'react'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NotFound: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Result
      status="404"
      title="404"
      subTitle={t('notFoundSubTitle')}
      extra={
        <Link to="/">
          <Button type="primary">{t('backHome')}</Button>
        </Link>
      }
    />
  )
}

export default NotFound
