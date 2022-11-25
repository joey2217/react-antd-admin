import React, { memo } from 'react'
import { Button, Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const LoginForm: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log('Success:', values)
    navigate('/', { replace: true })
  }

  return (
    <Form
      name="login"
      initialValues={{ username: 'Hello', password: 'World' }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          { required: true, message: t('login.usernameMessage') as string },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder={t('login.username') as string}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: t('login.passwordMessage') as string },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder={t('login.password') as string}
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          {t('login.title')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default memo(LoginForm)
