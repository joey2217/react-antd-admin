import { Card, Col, Row } from 'antd'
import React, { memo } from 'react'

const Login: React.FC = () => {
  return (
    <Row
      align="middle"
      justify="center"
      className="h-screen pb-20 bg-gradient-to-r from-blue-200 to-cyan-200"
    >
      <Col xs={24} sm={16} md={14} lg={12} xl={6}>
        <Card className="login-card" title={'登录'} extra={'TODO'}>
          {/* <LoginForm /> */}
        </Card>
      </Col>
    </Row>
  )
}

export default memo(Login)
