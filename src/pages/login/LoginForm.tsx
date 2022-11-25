import React, { memo, useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../utils/auth'
import { login } from '../../api/login'
import { useMessage } from '../../context/message'

const LoginForm: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const messageApi = useMessage()

  const [loading, setLoading] = useState(false)

  const onFinish = (values: any) => {
    console.log('Success:', values)
    setLoading(true)
    login(values)
      .then((res) => {
        setToken(res.data.token)
        messageApi.success(res.data.message)
        navigate('/', { replace: true })
      })
      .finally(() => {
        setLoading(false)
      })
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
        <Button block loading={loading} type="primary" htmlType="submit">
          {t('login.title')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default memo(LoginForm)
