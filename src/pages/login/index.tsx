import { Card, Col, Row, Space } from 'antd'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import LoginForm from './LoginForm'
import ThemeSwitch from '../../layout/Header/ThemeSwitch'
import LanguageDropdown from '../../layout/Header/LanguageDropdown'

const Login: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Row
      align="middle"
      justify="center"
      className="h-screen pb-20 bg-gradient-to-r from-blue-200 to-cyan-200"
    >
      <Col xs={24} sm={16} md={14} lg={12} xl={6}>
        <Card
          className="login-card"
          title={t('login.title')}
          extra={
            <Space size="middle">
              <ThemeSwitch />
              <LanguageDropdown />
            </Space>
          }
        >
          <LoginForm />
        </Card>
      </Col>
    </Row>
  )
}

export default memo(Login)
